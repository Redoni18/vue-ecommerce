import axios from 'axios'
const API_URL = "http://localhost:8000";

console.log(API_URL)

export function getWishlists() {
    return axios.get(`${API_URL}/api/wishlists`)
}

export function insertWishlist(wishlist) {
    console.log(wishlist)
    return axios.post(`${API_URL}/api/uploadWishlist`, wishlist)
}

export function editWishlist(wishlist) {
    console.log(wishlist)
    return axios.put(`${API_URL}/api/editWishlist/${wishlist._id}`, wishlist)
}

export function removeWishlist(wishlistId) {
    return axios.delete(`${API_URL}/api/wishlists/delete/${wishlistId}`)
}

export function getWishlist(wishlistId) {
    return axios.get(`${API_URL}/api/wishlist/${wishlistId}`)
}