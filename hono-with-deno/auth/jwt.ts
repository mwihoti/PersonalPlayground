import { create, getNumericDate, verify } from "@zaubrik/djwt";
import { PersonalDetail } from "../types/inferred.ts"

/**
 * Our JWT key to be used to generate the signature.
 */

const key = await crypto.subtle.generateKey(
    { name: "HMAC", hash: "SHA-512"},
    false,
    ["sign", "verify"]
);
/**
 * Generates a Json Web Token (JWT) for user login authentication.
 * This JWT is used throughout a user's session until it expires.
 * @param payload User data such as email and id
 * @param origin domain name of source origin
 * @returns `Promise<string|undefined>`
 */

const generateJwt = async (
    payload: PersonalDetail | undefined,
    origin: string,
) => {
    if (!payload) return payload;

    /**
   * **N**ot **B**e**F**ore
   */

    const nbf = new Date();
    nbf.setDate(nbf.getDate() + 365);


    const jwt = await create ({
        alg: "HS512",
        type: "JWT",

    }, {
        exp: getNumericDate(nbf),
        aud: origin,
        email: payload.email,
    }, key);
    return { jwt, nbf };


};
