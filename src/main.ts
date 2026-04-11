import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import WorldTs from './components/customComponents/worldTS.vue'


const app = createApp(App)
app.component('world-ts', WorldTs)
app.use(createPinia())
app.use(router)

app.mount('#app')
