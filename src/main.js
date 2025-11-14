import { createApp } from 'vue'
import App from './App.vue'
import FloatingVue from 'floating-vue'
import router from "./Router"

import 'floating-vue/dist/style.css'


createApp(App).use(FloatingVue).use(router).mount('#app')


