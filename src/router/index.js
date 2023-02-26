import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import * as auth from '../helper/auth'
// import store from '../store'

import * as beforeEnter from './beforeEnter'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      beforeEnter.authenticate(to, from, next)
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    beforeEnter: (to, from, next) => {
      beforeEnter.authenticate(to, from, next)
    }
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/auth/Register.vue'),
    beforeEnter: (to, from, next) => {
      beforeEnter.isAuthenticated(to, from, next)
    }
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue'),
    beforeEnter: (to, from, next) => {
      beforeEnter.isAuthenticated(to, from, next)
    }
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (auth.userExists()) {
//     store.commit('storeUser', auth.getUser());
//     next()
//   } else {
//     next('login')
//   }
// })


export default router
