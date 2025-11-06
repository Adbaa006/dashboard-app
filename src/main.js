import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import Detaljer from './pages/Detaljer.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

createApp(App).mount('#app')

const router = createRouter ({
  history: createWebHashHistory(),
  routes: [
    {path: '/ticket/:id', component: Detaljer}
  ]
})