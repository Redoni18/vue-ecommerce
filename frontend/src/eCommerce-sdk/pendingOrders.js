import axios from 'axios'
const API_URL = "http://localhost:8000";

export function getPendingOrders(){
    return axios.get(`${API_URL}/api/pending-orders`)
}

export function insertPendingOrder(order) {
    return axios.post(`${API_URL}/api/uploadPendingOrder`, order)
}

export function removePendingOrder(orderId) {
    return axios.delete(`${API_URL}/api/pending/delete/${orderId}`)
}