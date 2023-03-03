import { getProducts } from '@/eCommerce-sdk/products.js'

export const fetchProducts = ({commit}) => {
    return new Promise((resolve, reject) => {
        getProducts()
        .then((response) =>{
            console.log(response)
            commit('storeProducts', response.data)
            resolve(response)
        })
        .catch(error => { reject(error) })
    })
};