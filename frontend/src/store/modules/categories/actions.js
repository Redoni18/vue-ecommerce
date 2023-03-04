import { getCategories } from '@/eCommerce-sdk/categories.js'

export const fetchCategories = ({commit}) => {
    return new Promise((resolve, reject) => {
        getCategories()
        .then((response) =>{
            console.log(response)
            commit('storeCategories', response.data)
            resolve(response)
        })
        .catch(error => { reject(error) })
    })
};