'use server'
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { parseStringify } from "../utils";
import { ID } from "node-appwrite";

export const signIn = async () => {
    try {
        const { account} = await createAdminClient();
        const response = await account.createEmailPasswordSession(email, password)

    } catch (error) {
        console.error('Error', error);
    }
}

export const signUp = async (userData : SignUpParams) => {
    const { email, firstName, password, lastName } = userData;
    let newUserAccount;

    try {

        const { account } = await createAdminClient();
    

        newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            `${firstName} ${lastName}`
          );
      
          if(!newUserAccount) throw new Error('Error creating user')

        const session = await account.createEmailPasswordSession(email, password);
        cookies().set("my-custom-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        })
        return parseStringify(newUserAccount)
        redirect('/account');


    } catch (error) {
        console.error('Error', error);
    }
}

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const user =  await account.get();

        return parseStringify(user)

    } catch (error) {
        return null;
    }
}