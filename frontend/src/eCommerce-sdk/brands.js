import axios from 'axios'
const API_URL = "http://localhost:8000";

export function getBrands(){
    return axios.get(`${API_URL}/api/brands`)
}

export function insertBrand(brand) {
    return axios.post(`${API_URL}/api/uploadBrand`, brand)
}

export function editBrand(brand) {
    console.log(brand)
    return axios.put(`${API_URL}/api/editBrand/${brand._id}`, brand)
}

export function removeBrand(brandId) {
    return axios.delete(`${API_URL}/api/brands/delete/${brandId}`)
}

export function getBrand(brandId) {
    return axios.get(`${API_URL}/api/brands/${brandId}`)
}