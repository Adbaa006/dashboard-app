import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import './assets/styles.css'

import Detaljer from './pages/Detaljer.vue'
import Home from './pages/Home.vue'
import Profil from './pages/Profil.vue'
import Support from './pages/Support.vue'

const router = createRouter ({
  history: createWebHashHistory(),
  routes: [
    { path: '/ticket/:id', component: Detaljer },
    { path: '/home', component: Home },
    { path: '/profile', component: Profil },
    { path: '/support', component: Support }
  ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')