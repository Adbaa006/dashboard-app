<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue';
import { getTickets } from '@/services/api';

const route = useRoute()

const tickets = ref([])

onMounted(async () => {
  tickets.value = await getTickets
})

const ticket = computed(() => {
  const id = Number(route.params.id)
  return getTickets.find(t => t.id === id)
})

const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleString('no-NO', {
      dateStyle: 'medium',
      timeStyle: 'short'
  })
}

console.log('route id:', route.params.id)
console.log('tickets ids:', supportTickets.map(t => t.id))
console.log('Route params:', route.params)
console.log('Parsed id:', parseInt(route.params.id))
console.log('Matching ticket:', supportTickets.find(t => t.id === parseInt(route.params.id)))
</script>

<template>
  <div v-if="ticket" class="ticket-details-page" >
    <div class="ticket-name">
      <h1>{{ ticket.subject }}</h1>
      <h3>{{ ticket.customer }}</h3>
    </div>
    <div class="ticket-details">
      <div class="details">
        <p><strong>Description</strong></p>
        <p>{{ ticket.description }}</p>
      </div>
      <div class="more-details">
        <p><strong>Status: </strong> {{ ticket.status }}</p>
        <p><strong>Priority: </strong> {{ ticket.priority }}</p>
        <p><strong>Assigned: </strong> {{ ticket.assignee }}</p>
        <p><strong>Timestamp: </strong> {{ formatDate(ticket.timestamp) }}</p>
      </div>
    </div>
    <router-link to="/support" class="back-link"><p>Back to the menu</p></router-link>
  </div>
  <div v-else class="not-found">
    <h2>Could not find ticket</h2>
    <router-link to="/support"><p>Back</p></router-link>
  </div>
</template>

<style scoped>
.ticket-details-page {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.ticket-name {
  padding: 1rem;
}
.ticket-details {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 1rem;
  padding-bottom: 5rem;
}
.details {
  max-width: 20rem;
}
.more-details {
  padding-left: 5rem;
}
.back-link {
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
}
p {
  color: rgb(0, 8, 22);;
}
p:hover {
  text-decoration: underline;
}
h1 {
  padding-bottom: 0.5rem;
}
.not-found {
  padding: 2rem;
  text-align: center;
}
</style>