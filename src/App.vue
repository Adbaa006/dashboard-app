<script setup>
import { ref, computed } from 'vue'
import Home from './pages/Home.vue'
import Support from './pages/Support.vue'
import Profil from './pages/Profil.vue'
import Navbar from './components/Navbar.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import TicketDetails from './pages/TicketDetails.vue'

const routes = {
  '/': Home,
  '/support': Support,
  '/profil': Profil,
  '/support/:id': TicketDetails
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() =>{
  return routes[currentPath.value.slice(1) || '/']
})
</script>

<template>
  <container class="grid-container">
    <nav class="nav"><Navbar /></nav>
    <aside class="menu"><Menu /></aside>
    <main class="main">
      <component :is="currentView" />
    </main>
    <footer class="footer"><Footer /></footer>
  </container>
</template>