<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import { supportTickets } from '@/data/supportData';

const route = useRoute()

const ticket = computed(() => {
  const id = parseInt(route.params.id)
  return supportTickets.find(t => t.id === id)
})

const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('no-NO', {
        dateStyle: 'medium',
        timeStyle: 'short'
    })
}
</script>

<template>
  <div v-if="ticket.value" class="ticket-details" >
    <div class="ticket-name">
      <h1>{{ ticket.value.subject }}</h1>
      <p>{{ ticket.value.customer }}</p>
    </div>
    <div class="ticket-details">
      <div class="details">
        <p><strong>Description</strong></p>
        <p>{{ ticket.value.description }}</p>
      </div>
      <div class="more-details">
        <p><strong>Status: </strong> {{ ticket.value.status }}</p>
        <p><strong>Priority: </strong> {{ ticket.value.priority }}</p>
        <p><strong>Assigned: </strong> {{ ticket.value.assignee }}</p>
        <p><strong>Timestamp: </strong> {{ formatDate(ticket.value.timestamp) }}</p>
      </div>
    </div>
    <router-link to="/support" class="back-link">Back to the menu</router-link>
  </div>
  <div v-else class="not-found">
    <h2>Could not find ticket</h2>
    <router-link to="/support"><p>Back</p></router-link>
  </div>
</template>

<style scoped>
    .ticket-details {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.back-link {
  display: inline-block;
  margin-top: 1rem;
  color: #2563eb;
  text-decoration: none;
}

.not-found {
  padding: 2rem;
  text-align: center;
}
</style>