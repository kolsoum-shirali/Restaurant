import './assets/scss/main.scss'
import './assets/css/main.css'
import './assets/js/script'
import './assets/js/all.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
