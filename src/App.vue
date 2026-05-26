<script setup>
import Menu from './components/Menu.vue';
import Signering from './components/Signering.vue';
</script>

<template>
  <div class="grid-container">
    <aside class="menu"><Menu /></aside>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer"><Signering /></footer>
  </div>
</template>
