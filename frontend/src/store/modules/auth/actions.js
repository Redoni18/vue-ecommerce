import {signin, userSignOut} from '../../../eCommerce-sdk/user'
import { getAuth } from "firebase/auth";

export const loginUser = ({commit}, userData) => {
    return new Promise((resolve, reject) => {
        console.log(userData)
        signin(userData)
        .then((response) =>{
            console.log(response)

            const auth = getAuth()
            console.log(auth)
            commit('storeUser', auth.currentUser)
            resolve(response)
        })
        .catch(error => { reject(error) })
    })
};

export const logout = ({commit}) => {
    return new Promise((resolve, reject) => {
        userSignOut()
        .then((response) =>{
            console.log(response)
            commit('removeUser')
            resolve(response)
        })
        .catch(error => { reject(error) })
    })
};

export const updateUser = ({commit}) => {
    const auth = getAuth()
    console.log(auth)
    commit('updateUser', auth.currentUser)
};

// export const getPersonalInfo = ({ commit }) => {    
//     return new Promise((resolve, reject) => {
//         getMyInfo()
//         .then(response => {
//             commit('storeId', response.data.user.id)
//           resolve(response)
//         })
//         .catch(error => { reject(error) })
//     })
// };

// export const refreshtJwtToken = () => {    
//     return new Promise((resolve, reject) => {
//         refreshToken()
//         .then(response => {
//           resolve(response)
//         })
//         .catch(error => { reject(error) })
//     })
// };

// export const signOut = ({ commit } ) => {
//     commit('removeUser');

//     return Promise.resolve();
// }