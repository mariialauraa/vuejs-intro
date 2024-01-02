import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/global.css'

createApp(App).use(router).use(createPinia()).mount('#app')
//const app = createApp(App)
//app.use(router)
//const pinia = createPinia()
//app.use(pinia)
//app.mount('#app')