import { verifyJwt } from "./jwt.ts";
import { getCookie } from "@hono/hono/cookie";
import type { Context, Next } from "@hono/hono";
import { HTTPException } from "@hono/hono/http-exception";


/**
Checks if user is authenticated by checking the request cookie
and the Authorization header. Then the JWT tokens are pulled
from both cookie and header and then compared if it matches.

If they don't match, then function just early returns with
null/undefined.
 */

const checkAuth = async (
    ctx: Context,
    next: Next,
) => {
    const method = ctx.req.method;

    if (
        (method === "PUT" || method === "DELETE")
    ) {
        const jwtFromCookie = getCookie(ctx, "jwt");
        console.log(jwtFromCookie);

        let jwtSignature: string = "";

        const authHeader = ctx.req.header("Authorization");
        if (!authHeader) {
            throw new HTTPException(403, {
                message: "You are not allowed to modify this resource.",
            });
        }
        const [, jwtSig] = authHeader.split(" ");
        console.log(jwtSig);

        if (!jwtSig.trim() || !jwtFromCookie) {
            throw new HTTPException(403, {
                message: "You are not allowed to modify this resource.",
            });
        jwtSignature = jwtSig;
        if ( 
            (jwtFromCookie === jwtSignature)
        ) {
            const jwtCookieValue = await verifyJwt(jwtFromCookie);
        }
}
    await next();
};

export default checkAuth;