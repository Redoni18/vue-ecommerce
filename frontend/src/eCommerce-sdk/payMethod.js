import axios from 'axios'
const API_URL = "http://localhost:8000";

console.log(API_URL)

export function getPaymethods(){
    return axios.get(`${API_URL}/api/paymethods`)
}

export function insertPayMethod(paymethod) {
    console.log(paymethod)
    return axios.post(`${API_URL}/api/uploadPayMethod`, paymethod)
}

export function editPayMethod(paymethod) {
    console.log(paymethod)
    return axios.put(`${API_URL}/api/editPayMethod/${paymethod._id}`, paymethod)
}

export function removePaymethod(paymethodId) {
    return axios.delete(`${API_URL}/api/paymethods/delete/${paymethodId}`)
}

export function getPaymethod(paymethodId) {
    return axios.get(`${API_URL}/api/paymethod/${paymethodId}`)
}