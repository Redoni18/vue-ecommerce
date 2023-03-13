import { createRouter, createWebHashHistory } from 'vue-router'
import UserProfile from '../views/UserProfile.vue'
import * as auth from '../helper/auth'
import store from '../store'

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/productCards/ProductCards.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/products',
        name: 'products',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "products" */ '../views/products/Listing.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/wishlist/card',
        name: 'wishlistCard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/wishlistCards/WishlistCards.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/products/insert',
        name: 'productsInsert',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "productsInsert" */ '../views/products/CreateProduct.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/products/details/:id',
        name: 'productDetails',
        component: () =>
            import ( /* webpackChunkName: "productDetails" */ '../views/products/ProductDetails.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/reviews/product/:id',
        name: 'reviews',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/reviews/Reviews.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/categories',
        name: 'categories',
        component: () =>
            import ( /* webpackChunkName: "categories" */ '../views/categories/Listing.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/categories/insert',
        name: 'categoryInsert',
        component: () =>
            import ( /* webpackChunkName: "upcomings" */ '../views/categories/CreateCategory.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/upcomings',
        name: 'upcomings',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "upcomings" */ '../views/upcomings/Listing.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/upcomings/insert',
        name: 'upcomingsInsert',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "upcomingsInsert" */ '../views/upcomings/CreateUpcoming.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/brands',
        name: 'brands',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "brands" */ '../views/brands/Listing.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/brands/insert',
        name: 'brandsInsert',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "brandsInsert" */ '../views/brands/CreateBrand.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/payments',
        name: 'payments',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/paymethods/Listing.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/payments/insert',
        name: 'paymentsInsert',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "paymentsInsert" */ '../views/paymethods/CreatePayMethod.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/wishlists',
        name: 'wishlists',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/wishlists/Listing.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/contacts',
        name: 'contacts',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "contacts" */ '../views/contacts/Listing.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/contacts/insert',
        name: 'contactsInsert',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "contactsInsert" */ '../views/contacts/CreateContact.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/category/:id',
        name: 'categoryProducts',
        component: () =>
            import ( /* webpackChunkName: "categoryProducts" */ '../views/categoryProducts/CategoryProducts.vue'),
        meta: { requiresAuth: true }
    },  
    {
        path: '/orders',
        name: 'orders',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "orders" */ '../views/orders/Listing.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/success',
        name: 'success',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "success" */ '../views/Success.vue'),
        meta: { requiresAuth: true }
    }, 
    {
        path: '/register',
        name: 'register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/auth/Register.vue'),
        meta: { requiresAuth: false }
    }, 
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/auth/Login.vue'),
        meta: { requiresAuth: false }
    }, 
    {
        path: '/profile',
        name: 'profile',
        component: UserProfile,
        meta: { requiresAuth: true }
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue'),
        meta: { requiresAuth: false }
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth)) {
      
        const isAuthenticated = checkAuthentication();

        if (isAuthenticated) {
            store.commit('storeUser', auth.getUser());
            next();
        } else {
            next('/login');
        }
    } else {
      next();
    }
});

function checkAuthentication() {
    if(auth.userExists()) return true
    return false;
}

export default router;
