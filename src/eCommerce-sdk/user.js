import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export async function signin(userData) {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, userData.email, userData.password)
    return response
}

export async function userSignOut() {
    const auth = getAuth();
    try {
        console.log('1sdfsdf')
        const response = await signOut(auth)
        console.log(response)
        return response
    } catch(err) {
        console.log(err)
    }
}