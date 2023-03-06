import axios from 'axios'
const API_URL = "http://localhost:8000";

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

export function insertUser(user) {
    console.log(user)
    return axios.post(`${API_URL}/api/insertUser`, user)
}

export function getUser(uid) {
    return axios.get(`${API_URL}/api/user/${uid}`)
}