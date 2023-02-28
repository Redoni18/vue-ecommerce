export function storeUser(userData){
    localStorage.setItem('user', userData);
}

export function userExists() {
    return localStorage.getItem('user') ? true : false;
}

export function getLocalStorage() {
    var user = JSON.parse(localStorage.getItem('user'));
    return user;
}

export function getUser() {
    if (userExists()) {
        return getLocalStorage();
    }
}

export function removeUser() {
    if(userExists) {
        return localStorage.removeItem('user')
    }
}