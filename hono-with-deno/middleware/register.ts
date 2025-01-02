import { Context } from "@hono/hono";
import { argon2Hasher } from "../auth/pwd.ts";
import type { BlankEnv, BlankInput } from "@hono/hono/types";
import { personalDetailsDb } from "../mock/database/mod.ts";
import { PersonalDetailWithSalt } from "../types/common.ts";
import { HTTPException } from "@hono/hono/http-exception";
import { encodeBase64 } from "@std/encoding";


const registerUser = async (
    c: Context<BlankEnv, "/auth/admin/register", BlankInput>,
) => {
    const userInput = await c.req.json<
    { firstName: string; lastName: string; email: string; password: string}> ();
    const stmt1 = personalDetailsDb.prepare("SELECT * FROM people WHERE email = ?");

    const row = stmt1.get<PersonalDetailWithSalt>(userInput.email);
    if (row) {
        throw new HTTPException(404, { message: "User already exists."});
    }

    const randSalt = crypto.getRandomValues( new Uint8Array(32));
    const salt = encodeBase64(randSalt);
    const hashedPassword = encodeBase64(argon2Hasher(userInput.password, salt) );
    const stmt2 = personalDetailsDb.prepare(
        "INSERT INTO people(firstName, lastName, email, password, salt) VALUES (?, ?, ?, ?, ?);",

    );
    const changes = stmt2.run(
        userInput.firstName,
        userInput.lastName,
        userInput.email,
        hashedPassword,
        salt,
    );
    if (changes > 0) {
        return c.json(userInput);
    }
    throw new HTTPException(503, { message: "Server error."});
    
    }

    export default registerUser;