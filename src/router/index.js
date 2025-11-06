import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Support from '../pages/Support.vue'
import Profil from '../pages/Profil.vue'
import Detaljer from '../pages/Detaljer.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/support', name: 'Support', component: Support },
  { path: '/profil', name: 'Profil', component: Profil },
  { path: '/detaljer/:id', name: 'Detaljer', component: Detaljer },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
