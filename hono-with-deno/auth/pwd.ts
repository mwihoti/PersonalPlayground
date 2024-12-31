import { decodeBase64, encodeBase64 } from "@std/encoding";
import { type Argon2Params, hash } from "@denosaurs/argontwo";
import "@std/dotenv/load";

const TOKEN = decodeBase64(Deno.env.get("API_KEY") ?? "");
const encoder = new TextEncoder();

export const argon2Verify = (
    password: string,
    salt: string,
    originalHash: string,
): boolean => {
    const encodedPassword = encoder.encode(password);
    const encodedSalt = encoder.encode(salt);
    const params: Argon2Params = {
        algorithm: "Argon2id",
        secret: TOKEN,
        version: 0x13,
    };

    const ret = encodeBase64(hash(encodedPassword, encodedSalt, params)) === originalHash;
    return ret;
}

export const argon2Hasher = (password: string, salt: string): ArrayBuffer => {
    const encodedPassword = encoder.encode(password);
    const encodedSalt = encoder.encode(salt);
    const params: Argon2Params = {
        algorithm: "Argon2id",
        secret: TOKEN,
        version: 0x13,
    };
    return hash(encodedPassword, encodedSalt, params);
}