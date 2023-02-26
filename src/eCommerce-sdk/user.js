import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function signin(userData) {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, userData.email, userData.password)
    return response
}