import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVueNext from 'bootstrap-vue-next'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

import Vue3Toastify from 'vue3-toastify';

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'

import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select'

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

createApp(App).use(store).use(router).use(BootstrapVueNext).use(Vue3Toastify, {autoClose: 3000}).use(VueGoodTablePlugin).use(VueSidebarMenu).component('v-select', vSelect).mount('#app')
