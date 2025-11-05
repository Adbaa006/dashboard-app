<template>
  <div class="layout">
    <Sidebar />
    <div class="content">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  background: #f4f6fa;
  overflow-y: auto;
}
</style>
