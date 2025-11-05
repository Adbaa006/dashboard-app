<template>
  <div class="dashboard">
    <div class="stats">
      <StatCard title="Earning" value="$628" />
      <StatCard title="Share" value="2434" />
      <StatCard title="Likes" value="1259" />
      <StatCard title="Rating" value="8.5" />
    </div>

    <div class="charts">
      <ChartBar />
      <ChartLine />
    </div>
  </div>
  <div>
    <h2>Welcome, {{ userProfile.firstName }}</h2>
    <p>Role: {{ userProfile.role }}</p>

    <h3>Open Tickets:</h3>
    <ul>
      <li v-for="ticket in supportTickets.filter(t => t.status === 'Open')" :key="ticket.id">
        <strong>{{ ticket.customer }}</strong> — {{ ticket.subject }} ({{ ticket.priority }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import StatCard from '../components/StatCard.vue'
import ChartBar from '../components/ChartBar.vue'
import ChartLine from '../components/ChartLine.vue'
import { userProfile, supportTickets } from '../data/mockData.js'

console.log(userProfile)
console.log(supportTickets)
</script>

<style scoped>
.dashboard {
  padding: 1.5rem;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1.5rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.charts {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
}
</style>
