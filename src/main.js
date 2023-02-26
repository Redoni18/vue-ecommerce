import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVueNext from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

var firebaseConfig = {
    apiKey: "AIzaSyDjhzE9aaeDQw46_iWSLHLOek6TzP6QlsI",
    authDomain: "ecommerce-vuejs-5d4b6.firebaseapp.com",
    projectId: "ecommerce-vuejs-5d4b6",
    storageBucket: "ecommerce-vuejs-5d4b6.appspot.com",
    messagingSenderId: "804014113053",
    appId: "1:804014113053:web:986e6ff0992b5691e0a1f4",
    measurementId: "G-6PC1WE2N0Q"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app, auth }

createApp(App).use(store).use(router).use(BootstrapVueNext).use(Vue3Toasity).use(VueSidebarMenu).mount('#app')
