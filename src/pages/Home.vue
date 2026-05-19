<script setup>
import FilterTable from '@/components/FilterTable.vue';
import { userProfile, supportTickets } from '../data/supportData.js';
import ForhondsvisningTabel from '@/components/forhondsvisningTabel.vue';

console.log(userProfile)
console.log(supportTickets)
</script>

<template>
  <main class="main">
    <header>
      <h1>Welcome, {{ userProfile.firstName }}</h1>
      <p>Role: {{ userProfile.role }}</p>
    </header>
    <statChart />
    <div class="feilmeldinger">
      <ForhondsvisningTabel />

    </div>
  </main>
</template>

<style scoped>
h1,
p {
  color: rgb(0, 8, 22);
}
main {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
</style>
