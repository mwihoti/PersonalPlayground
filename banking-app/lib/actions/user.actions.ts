'use server'
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signIn = async () => {
    try {

    } catch (error) {
        console.error('Error', error);
    }
}

export const signup = async (userData : SignUpParams) => {
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
        redirect('/account');


    } catch (error) {
        console.error('Error', error);
    }
}

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        return await account.get();

    } catch (error) {
        return null;
    }
}