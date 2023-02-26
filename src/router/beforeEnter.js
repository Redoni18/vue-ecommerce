import * as auth from '../helper/auth'
import store from '../store'


export const authenticate = (to, from, next) => {
    if (!auth.userExists()) {
        next('login')
    } else {
        store.commit('storeUser', auth.getUser());
        next()
    }
}



export const isAuthenticated = (to, from, next) => {
    auth.userExists() ? next('/') : next();
}