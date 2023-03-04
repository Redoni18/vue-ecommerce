import axios from 'axios'
const API_URL = "http://localhost:8000";

console.log(API_URL)

export function getCategories(){
    return axios.get(`${API_URL}/api/categories`)
}

export function insertCategory(category) {
    console.log(category)
    return axios.post(`${API_URL}/api/uploadCategory`, category)
}

export function editCategory(category) {
    console.log(category)
    return axios.put(`${API_URL}/api/editCategory/${category._id}`, category)
}

export function removeCategory(categoryId) {
    return axios.delete(`${API_URL}/api/categories/delete/${categoryId}`)
}

export function getCategory(categoryId) {
    return axios.get(`${API_URL}/api/category/${categoryId}`)
}