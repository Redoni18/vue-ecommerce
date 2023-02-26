import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function signin(userData) {
    const auth = getAuth();
    try{
        const response = await signInWithEmailAndPassword(auth, userData.email, userData.password)
        return response
    } catch(err) {
        console.log(err)
    }
}