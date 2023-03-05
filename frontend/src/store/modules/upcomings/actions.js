import { getUpcomings } from '@/eCommerce-sdk/upcomings.js'

export const fetchUpcomings = ({ commit }) => {
    return new Promise((resolve, reject) => {
        getUpcomings()
            .then((response) => {
                console.log(response)
                commit('storeUpcomings', response.data)
                resolve(response)
            })
            .catch(error => { reject(error) })
    })
};