'use server action'
import {createAdminClient, createSessionClient} from "../appwrite";

export const signIn = async () => {
    try {

    } catch (error) {
        console.error('Error', error);   }
}

export const signup = async () => {
    const {email, password, firstName, lastName } = userData;
    try {
    const {account} = await createAdminClient();
    await account.create(ID.unique(), email, password, name);
    

    } catch (error) {
        console.error('Error', error);   }
}

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        return await account.get();

    } catch (error) {
        return null;
    }
}