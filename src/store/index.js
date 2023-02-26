import { createStore } from 'vuex'
import authIndex from './modules/auth/authIndex'

export default createStore({
  modules: {
    authenticate: authIndex,
  }
})