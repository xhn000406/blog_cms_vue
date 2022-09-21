import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/index.css'

import { createPinia } from 'pinia'
import router from './router/index'

const pinpia = createPinia()

const app = createApp(App)
app.use(pinpia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
