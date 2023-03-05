import axios from 'axios'
const API_URL = "http://localhost:8000";

console.log(API_URL)

export function getUpcomings() {
    return axios.get(`${API_URL}/api/upcomings`)
}

export function insertUpcoming(upcoming) {
    console.log(upcoming)
    return axios.post(`${API_URL}/api/uploadUpcoming`, upcoming)
}

export function editUpcoming(upcoming) {
    console.log(upcoming)
    return axios.put(`${API_URL}/api/editUpcoming/${upcoming._id}`, upcoming)
}

export function removeUpcoming(upcomingId) {
    return axios.delete(`${API_URL}/api/upcomings/delete/${upcomingId}`)
}

export function getUpcoming(upcomingId) {
    return axios.get(`${API_URL}/api/upcoming/${upcomingId}`)
}