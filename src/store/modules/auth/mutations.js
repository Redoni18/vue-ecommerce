import * as auth from '../../../helper/auth'

export const storeUser = (state, userData) => {
    state.user.authenticated = true;
    state.user.data = userData;

    auth.storeUser(JSON.stringify(userData));
}

// export const storeId = (state, id) => {
//     state.user.user_id = id    
// }

// export const removeUser = (state) => {
//     state.user.authenticated = false;
//     state.user.data = null;
//     state.user.user_id = null
//     auth.removeUser()
// }