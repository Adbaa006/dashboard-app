<script setup>
import ForhondsvisningTabel from '@/components/ForhondsvisningTabel.vue';
import FilterTable from '@/components/FilterTable.vue';
import { userProfile, supportTickets } from '@/data/supportData';
import StatChart from '@/components/StatChart.vue';

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
</style>
