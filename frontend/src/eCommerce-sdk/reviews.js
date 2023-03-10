import axios from 'axios'
const API_URL = "http://localhost:8000";

export function getReviews(){
    return axios.get(`${API_URL}/api/reviews`)
}

export function insertReview(review) {
    return axios.post(`${API_URL}/api/uploadReview`, review)
}

export function editReview(review) {
    console.log(review)
    return axios.put(`${API_URL}/api/editReview/${review._id}`, review)
}

export function removeReview(reviewId) {
    return axios.delete(`${API_URL}/api/reviews/delete/${reviewId}`)
}

export function getReview(reviewId) {
    return axios.get(`${API_URL}/api/review/${reviewId}`)
}