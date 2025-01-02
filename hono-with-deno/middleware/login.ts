import { Context } from "@hono/hono";
import { argon2Verify } from "../auth/pwd.ts";
import type { BlankEnv, BlankInput } from "@hono/hono/types";
import { personalDetailsDb } from "../mock/database/mod.ts";
import { PersonalDetail } from "../types/inferred.ts";
import { PersonalDetailWithSalt } from "../types/common.ts";
import { HTTPException } from "@hono/hono/http-exception";
import { generateJwt } from "../auth/jwt.ts";
import { setCookie } from "@hono/hono/cookie";
import { PersonalDetail } from '../types/inferred';

const loginUser = async (
c: Context<BlankEnv, "/auth/admin/login", BlankInput>,
) => {
const userInput = await c.req.json<{ email: string; password: string }>();
const stmt1 = personalDetailsDb.prepare("SELECT * FROM people WHERE email = ?",

);
const row = stmt1.get<PersonalDetailWithSalt>(userInput.email);
if (!row) {
    throw new HTTPException(404, { message: "User does not exist."});
}
const verified = argon2Verify(userInput.password, row.salt, row.password);
if (verified ) {
    const personalDetail: PersonalDetail = {
        id: row.id,
        firstName: row.firstName,
        lastName: row.lastName,
        email: row.email,
        password: row.password,
    };
    const jwtData = await generateJwt(personalDetail, c.req.url);
    if (!jwtData) {
        throw new HTTPException(503, { message: " Server Error."});
    }
    setCookie(c, "jwt", jwtData.jwt, {
        expires: new Date(jwtData.nbf),
        secure: false,
        sameSite: "Lax",
        path: "/",
        httpOnly: true,
    });
    return c.text("User has logged in");
}
throw new HTTPException(403, { message: "Invalid credentials."})
};

export default loginUser;