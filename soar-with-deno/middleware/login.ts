import type { RouterContext } from "@oak/oak";
import { argon2Verify } from "~crypto/pwd";
import { generateJwt } from "~crypto/jwt";
import db from "~database";
import type User from "~types/user";
import { LoginData } from "~types/request";

const login = async (
    ctx: RouterContext<
    "/login",
    Record<string | number, string | undefined>,
    // deno-lint-ignore no-explicit-any
    Record<string, any>
    >,
) => {
    const loginData: LoginData | undefined = await ctx.request.body.json();
    if (
        !loginData || !loginData.username?.trim() ||
        !loginData.password?.trim()
      ) {
        ctx.response.status = 422;
        ctx.response.body = {
          message: "Username or password field cannot be empty.",
          status: 422,
        };
        return;
      }
    
      const { username, password } = loginData;
    
      const stmt = db.prepare(
        `
            SELECT * FROM users WHERE username = '${username}';
            `,
      );
    
      const row = stmt.get<User>();
    
      if (!row) {
        ctx.response.status = 404;
        ctx.response.body = {
          message: `User with \`${username}\` does not exist.`,
          status: 404,
        };
        return;
      }

      const {salt: originalSalt, password: originalHash } = row;
      const verified = argon2Verify(password, originalSalt, originalHash);

      if (verified) {
        const jwtToken = await generateJwt(row, ctx.request.url.origin)
        if (!jwtToken) {
            ctx.response.status = 503;
            ctx.response.body = {
                message: "Server Error, unable to generate JWT.",
                status: 503,
            };
            return;
        }

        await ctx.cookies.set("user", jwtToken.jwt, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            signed: false,
            expires: new Date(jwtToken.nbf),
            path: "/",
        });

        ctx.response.status = 200;
        ctx.response.body = {
            message: `Correct credentials for \'${username}\'`,
            status: 200,
        };
        return;
      }
      ctx.response.status = 403;
      ctx.response.body = {
          message: "Unauthorised",
          status: 403,
      };
      return;

}

export default  login ;