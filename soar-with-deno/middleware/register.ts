import { crypto } from "@std/crypto";
import { encodeBase64 } from "@std/encoding";
import type { RouterContext } from "@oak/oak";
import { argon2Hasher } from "~crypto/pwd";
import db from "~database";
import type User from "~types/user";
import { RegisterData } from "~types/request";



const register = async(
    ctx: RouterContext<
    "/register",
    Record<string | number, string | undefined>,
    // deno-lint-ignore no-explicit-any
    Record<string, any>
    >,
) => {
    const registerData: RegisterData | undefined = await ctx.request.body.json();

    if (
        !registerData || !registerData.username?.trim() || !registerData.password?.trim()

    ) {
        ctx.response.status = 422;
        ctx.response.body = {
            message: "Username or Password field cannot be empty.",
            status: 422,
        }
        return;
    }

    const { username, password } = registerData;
    
    const stmt = db.prepare(
        `SELECT * FROM users WHERE username = '${username}'`,
    );

    const row = stmt.get<User>();
    if (!row) {
        const randSalt = crypto.getRandomValues(new Uint8Array(32));
        const salt = encodeBase64(randSalt);
        const hashedPassword = encodeBase64(argon2Hasher(password, salt));
        const changes = db.exec(
            `INSERT INTO users(username, password, salt) VALUES ('${username}', '${hashedPassword}', '${salt}');`,
        );
        if (changes > 0) {
            ctx.response.status = 200;
            ctx.response.body = {
                message: `User \'${username}\` is now registered.`,
                status: 200,
            };
            return;
        } else {
            ctx.response.status = 503;
            ctx.response.body = {
                message: 'Server Error',
                status: 503,
            };
        }
    }
    ctx.response.status = 409;
    ctx.response.body = {
        message: `User \`${username}\` already exists.`,
        status: 409,
    };
    return;

}

export default register;




