<script setup>
import { ref, computed } from 'vue'
import Home from './pages/Home.vue'
import Support from './pages/Support.vue'
import Profil from './pages/Profil.vue'
import Navbar from './components/Navbar.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

const routes = {
  '/': Home,
  '/support': Support,
  '/profil': Profil
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
  <Navbar />
  <Menu />
  <component :is="currentView" />
  <Footer />
</template>

