import axios from 'axios'
const API_URL = "http://localhost:8000";

console.log(API_URL)

export function getProducts(){
    return axios.get(`${API_URL}/api/products`)
}

export function insertProduct(product) {
    console.log(product)
    return axios.post(`${API_URL}/api/uploadProduct`, product)
}

export function editProduct(product) {
    console.log(product)
    return axios.put(`${API_URL}/api/editProduct/${product._id}`, product)
}

export function removeProduct(productId) {
    return axios.delete(`${API_URL}/api/products/delete/${productId}`)
}

export function getProduct(productId) {
    return axios.get(`${API_URL}/api/product/${productId}`)
}

export function filterProducts(searchTerm) {
    return axios.get(`${API_URL}/api/filterProduct?searchTerm=${searchTerm}`)
}

export function filterProductsWithBrand(category, brands) {
    return axios.get(`${API_URL}/api/filterProductsByBrand/${category}?brands=${brands}`)
}

export function stripeCheckoutSession(productId) {
    return axios.post(`${API_URL}/api/create-checkout-session/${productId}`)
}

export function getProductsBasedOnCookies(cookieCategories) {
    console.log(cookieCategories)
    return axios.get(`${API_URL}/api/products`, {
        params: {
          categories: cookieCategories,
        },
    });
}

// export function getLastPayment() {
//     return axios.get(`${API_URL}/api/stripe/last-payment`)
// }
