<script setup>
import { ref, computed } from 'vue'
import Home from './pages/Home.vue'
import Support from './pages/Support.vue'
import Profil from './pages/Profil.vue'

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
  <container class="grid-container">
    <nav><h1>Dasboard</h1></nav>
    <menu>
      <a href="#/">Home</a>
      <a href="#/support">Support</a>
      <a href="#/profil">Profil</a>
    </menu>
  </container>
  <component :is="currentView" />
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
  'menu nav'
  'menu header'
  'menu main';
}
nav {
  grid-area: nav;
  background-color: red;
}
.overskrift {
  grid-area: header;
  background-color: blue;
}
menu {
  grid-area: menu;
  background-color: green;
  flex-direction: column;
}
main {
  grid-area: main;
  background-color: purple;
}
</style>
