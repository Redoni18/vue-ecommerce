import axios from 'axios'
const API_URL = "http://localhost:8000";

export function getOrders(){
    return axios.get(`${API_URL}/api/orders`)
}

export function insertOrder(order) {
    return axios.post(`${API_URL}/api/uploadOrder`, order)
}

export function editOrder(order) {
    return axios.put(`${API_URL}/api/editOrder/${order._id}`, order)
}

export function removeOrder(orderId) {
    return axios.delete(`${API_URL}/api/orders/delete/${orderId}`)
}

export function getOrder(orderId) {
    return axios.get(`${API_URL}/api/order/${orderId}`)
}