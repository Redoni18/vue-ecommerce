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

// Set a cookie with an array of categories
export function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    const cookieValue = encodeURIComponent(JSON.stringify(value));
    document.cookie = `${name}=${cookieValue};expires=${expires.toUTCString()};path=/`;
}

// Get a cookie as an array of categories
export function getCookie(name) {
    const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    if (cookieValue) {
        const decodedValue = decodeURIComponent(cookieValue[2]);
        return JSON.parse(decodedValue);
    }
    return [];
}