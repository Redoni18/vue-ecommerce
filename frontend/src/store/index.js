import { createStore } from 'vuex'
import authIndex from './modules/auth/authIndex'
import productsIndex from './modules/products/productsIndex'

export default createStore({
  modules: {
    authenticate: authIndex,
    products: productsIndex

  }
})