import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

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

createApp(App).use(store).use(router).use(BootstrapVue3).use(VueSidebarMenu).mount('#app')
