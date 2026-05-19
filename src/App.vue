<script setup>
import Navbar from './components/Navbar.vue'
import Menu from './components/Menu.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <div class="grid-container">
    <nav class="nav"><Navbar /></nav>
    <aside class="menu"><Menu /></aside>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer"><Footer /></footer>
  </div>
</template>
