import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfile from '../views/UserProfile.vue'
// import * as auth from '../helper/auth'
// import store from '../store'

import * as beforeEnter from './beforeEnter'

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/productCards/ProductCards.vue'),
        beforeEnter: (to, from, next) => {
            beforeEnter.authenticate(to, from, next)
        }
    },
    {
        path: '/products',
        name: 'products',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/products/Listing.vue'),
        beforeEnter: (to, from, next) => {
            beforeEnter.authenticate(to, from, next)
        }
    },
    {
        path: '/products/insert',
        name: 'productsInsert',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/products/CreateProduct.vue'),
        beforeEnter: (to, from, next) => {
            beforeEnter.authenticate(to, from, next)
        }
    },
    {
        path: '/categories',
        name: 'categories',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/categories/Listing.vue'),
        beforeEnter: (to, from, next) => {
            beforeEnter.authenticate(to, from, next)
        }
    },
    {
        path: '/categories/insert',
        name: 'categoryInsert',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/categories/CreateCategory.vue'),
        beforeEnter: (to, from, next) => {
            beforeEnter.authenticate(to, from, next)
        }
    },
    {
        path: '/upcomings',
        name: 'upcomings',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/upcomings/Listing.vue'),
        beforeEnter: (to, from, next) => {
            beforeEnter.authenticate(to, from, next)
        }
    },
    {
        path: '/upcomings/insert',
        name: 'upcomingsInsert',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/upcomings/CreateUpcoming.vue'),
        beforeEnter: (to, from, next) => {
            beforeEnter.authenticate(to, from, next)
        }
    },
    {
        path: '/brands',
        name: 'brands',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/brands/Listing.vue'),
        beforeEnter: (to, from, next) => {
            beforeEnter.authenticate(to, from, next)
        }
    },
    {
        path: '/brands/insert',
        name: 'brandsInsert',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/brands/CreateBrand.vue'),
        beforeEnter: (to, from, next) => {
            beforeEnter.authenticate(to, from, next)
        }
    },
    {
        path: '/payments',
        name: 'payments',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/paymethods/Listing.vue'),
        beforeEnter: (to, from, next) => {
            beforeEnter.authenticate(to, from, next)
        }
    },
    {
        path: '/payments/insert',
        name: 'paymentsInsert',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/paymethods/CreatePayMethod.vue'),
        beforeEnter: (to, from, next) => {
            beforeEnter.authenticate(to, from, next)
        }
    },
    {
        path: '/category/:id',
        name: 'categoryProducts',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/categoryProducts/CategoryProducts.vue'),
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
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue'),
        beforeEnter: (to, from, next) => {
            beforeEnter.isAuthenticated(to, from, next)
        }
    },
    {
        path: '/register',
        name: 'register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/auth/Register.vue'),
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
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/auth/Login.vue'),
        beforeEnter: (to, from, next) => {
            beforeEnter.isAuthenticated(to, from, next)
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: UserProfile,
        beforeEnter: (to, from, next) => {
            beforeEnter.authenticate(to, from, next)
        }
    },
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