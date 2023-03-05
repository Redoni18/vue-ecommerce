import { createStore } from 'vuex'
import authIndex from './modules/auth/authIndex'
import productsIndex from './modules/products/productsIndex'
import categoriesIndex from './modules/categories/categoriesIndex'
import upcomingsIndex from './modules/upcomings/upcomingsIndex'

export default createStore({
    modules: {
        authenticate: authIndex,
        products: productsIndex,
        categories: categoriesIndex,
        upcomings: upcomingsIndex
    }
})