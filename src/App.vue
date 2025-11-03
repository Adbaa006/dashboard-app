<script setup>
import { ref, computed } from 'vue'
import Home from './Home.vue'
import Support from './Support.vue'
import Profil from './Profil.vue'

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
  <header><h1>Dashboard</h1></header>
  <menu>
    <a href="#/">Home</a>
    <a href="#/support">Support</a>
    <a href="#/profil">Profil</a>
  </menu>
  <main>
    <h1>Velkommen bruker</h1>
  </main>
  <component :is="currentView" />
</template>

<style scoped>
header {
  
}
</style>
