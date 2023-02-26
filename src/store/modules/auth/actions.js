import {signin} from '../../../eCommerce-sdk/user'

export const loginUser = ({commit}, userData) => {
    return new Promise((resolve, reject) => {
        console.log(userData)
        signin(userData)
        .then((response) =>{
            console.log(response)
            commit('storeUser', response)
            resolve(response)
        })
        .catch(error => { reject(error) })
    })
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