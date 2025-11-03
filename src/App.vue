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
  <nav><h1>Dasboard</h1></nav>
  <menu>
    <a href="#/">Home</a>
    <a href="#/support">Support</a>
    <a href="#/profil">Profil</a>
  </menu>
  <component :is="currentView" />
</template>

<style scoped>
nav {
  
}
header {

}
</style>
