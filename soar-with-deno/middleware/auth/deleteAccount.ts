import type { RouterContext } from "@oak/oak";
import { verifyJwt } from "~crypto/jwt";
import db from "~database";
import type User from "~types/user";



const deleteAccount = async (
    ctx: RouterContext<
    "/auth/delete",
    Record<string | number, string | undefined>,

    // deno-lint ignore no-explicit-any
    Record<string, any>
    >,
) => {
    const jwtFromCookie = await ctx.cookies.get("user");
    if (!jwtFromCookie) {
        ctx.response.status = 503;
        ctx.response.body = {
            message: `Server Error.`,
            status: 503,
        };
        return;
    }

    const { user: username } = await verifyJwt(jwtFromCookie);

    const stmt = db.prepare(
        `
        SELECT * FROM users WHERE Username = '${username}';`,
    );
    const row = stmt.get<User>();
    if (!row) {
        ctx.response.status = 503;
        ctx.response.body = {
            message: `Server Error.`,
            status: 503,
        };
        return;
    }

    const changes = db.exec(
        `DELETE FROM users WHERE Username = '${username}';`,
    );
    if (changes < 0) {
        ctx.response.status = 503;
        ctx.response.body = {
            message: 'Server Error',
            status: 503,
        };
        return;
    }

    ctx.response.status = 200;

    ctx.response.body = {
        message: `Account deleted.`,
        status: 200,
    };

    // clears up cookies
    await ctx.cookies.clear({
        httpOnly: true,
        secure: false,
        signed: false,
        sameSite: "lax",
    });
    return;
};

export default deleteAccount;