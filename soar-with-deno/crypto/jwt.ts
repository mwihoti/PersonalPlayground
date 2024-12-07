import { create, getNumericDate, verify } from "@zaubrik/djwt";
import type User from "~types/user";

/**
 * Our JWT key to be used to generate the signature.
 */


const key = await crypto.subtle.generateKey(
    { name: "HMAC", hash: "SHA-512"},
    false,
    ["sign", "verify"],
);

/**
 * Generates a Json Web Token (JWT) for user login authentication.
 * This JWT is used throughout a user's session until it expires.
 * @param payload User data such as username and id
 * @param origin domain name of source origin
 * @returns `Promise<{string|undefined, number} | undefined>`
 */

const generateJwt = async (payload: User | undefined, origin: string) => {
    if (!payload) return payload;

    /**
     * **N**ot **B**e**F**ore time in seconds.
     * 
     */

    const nbf = new Date();
    nbf.setDate(nbf.getDate() + 365);

    const jwt = await create({
        alg: "HS512",
        type: "JWT",
    }, {
        exp: getNumericDate(nbf),
        aud: origin,
        user: payload.username,
    }, key);


    return { jwt, nbf};
};

 /**
 * Verifies the signature of the JWT
 * @param jwt The JWT signature
 * @returns `string` value as the username.
 */

const verifyJwt = async (jwt: string) => {
        const payload: { user: string } = await verify(
            jwt,
            key,
        );

        return payload;
    };



export { generateJwt, verifyJwt };
