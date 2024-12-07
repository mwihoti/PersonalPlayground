import { crypto } from "@std/crypto";
import { encodeBase64 } from "@std/encoding";
import type { RouterContext } from "@oak/oak/router";
import { argon2Hasher, argon2Verify } from "~crypto/pwd";
import { verifyJwt } from "~crypto/jwt";
import db from "~database";
import type User from "~types/user";
import { RegisterData } from "~types/request";

const updateAccount = async (
  ctx: RouterContext<
    "/auth/update",
    Record<string | number, string | undefined>,
    // deno-lint-ignore no-explicit-any
    Record<string, any>
  >,
) => {
  const registerData: RegisterData | undefined = await ctx.request.body
    .json();

  if (
    !registerData || !registerData.username?.trim() ||
    !registerData.password?.trim()
  ) {
    ctx.response.status = 422;
    ctx.response.body = {
      message: "Username or password field cannot be empty.",
      status: 422,
    };
    return;
  }

  const { username: newUsername, password } = registerData;

  const jwtFromCookie = await ctx.cookies.get("user");

  if (!jwtFromCookie) {
    ctx.response.status = 503;
    ctx.response.body = {
      message: `Server Error.`,
      status: 503,
    };
    return;
  }

  const { user: oldUsername } = await verifyJwt(jwtFromCookie);

  const oldStmt = db.prepare(
    `
		SELECT * FROM users WHERE username = '${oldUsername}';
		`,
  );

  const newStmt = db.prepare(
    `
		SELECT * FROM users WHERE username = '${newUsername}';
		`,
  );

  const oldRow = oldStmt.get<User>();

  if (!oldRow) {
    ctx.response.status = 503;
    ctx.response.body = {
      message: `Server Error.`,
      status: 503,
    };
    return;
  }

  const newRow = newStmt.get<User>();

  if (newRow && oldRow && (newUsername === oldUsername)) {
    if (argon2Verify(password, oldRow.salt, oldRow.password)) {
      ctx.response.status = 304;
      ctx.response.body = {
        message: `No changes.`,
        status: 304,
      };
      return;
    }
    const randSalt = crypto.getRandomValues(new Uint8Array(14));
    const salt = encodeBase64(randSalt);
    const hashedPassword = encodeBase64(argon2Hasher(password, salt));
    const changes = db.exec(
      `
			UPDATE users 
			SET 
				password = '${hashedPassword}',
				salt = '${salt}'
			WHERE
				username = '${oldUsername}'
					`,
    );
    if (changes > 0) {
      ctx.response.status = 200;
      ctx.response.body = {
        message: `User \`${oldUsername}\` has changed password.`,
        status: 200,
      };
      return;
    } else {
      ctx.response.status = 503;
      ctx.response.body = {
        message: `Server Error.`,
        status: 503,
      };
      return;
    }
  } else if (!newRow) {
    let passwordMessage = "";
    if (argon2Verify(password, oldRow.salt, oldRow.password)) {
      passwordMessage = passwordMessage.concat("Password unchanged.");
    } else {
      passwordMessage = passwordMessage.concat("Password has changed.");
    }

    // We still update the salt at least.
    const randSalt = crypto.getRandomValues(new Uint8Array(14));
    const salt = encodeBase64(randSalt);
    const hashedPassword = encodeBase64(argon2Hasher(password, salt));
    const changes = db.exec(
      `
			UPDATE users 
			SET username = '${newUsername}',
				password = '${hashedPassword}',
				salt = '${salt}'
			WHERE
				username = '${oldUsername}'
					`,
    );

    if (changes > 0) {
      // clears up cookies
      await ctx.cookies.clear({
        httpOnly: true,
        secure: false,
        signed: false,
        sameSite: "lax",
      });
      ctx.response.status = 200;
      ctx.response.body = {
        message:
          `User has changed username. ${passwordMessage} Relogin required.`,
        status: 200,
      };

      return;
    } else {
      ctx.response.status = 503;
      ctx.response.body = {
        message: `Server Bolshit Error.`,
        status: 503,
      };

      return;
    }
  }

  ctx.response.status = 409;
  ctx.response.body = {
    message: `User \`${newUsername}\` already exists.`,
    status: 409,
  };
  return;
};

export default updateAccount;