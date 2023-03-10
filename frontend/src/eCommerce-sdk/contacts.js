import axios from 'axios'
const API_URL = "http://localhost:8000";

console.log(API_URL)

export function getContacts() {
    return axios.get(`${API_URL}/api/contacts`)
}

export function insertContact(contact) {
    console.log(contact)
    return axios.post(`${API_URL}/api/uploadContact`, contact)
}

export function removeContact(contactId) {
    return axios.delete(`${API_URL}/api/contacts/delete/${contactId}`)
}

export function getContact(contactId) {
    return axios.get(`${API_URL}/api/contact/${contactId}`)
}