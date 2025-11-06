<script setup>
import { useRoute } from 'vue-router'
import { supportTickets } from '@/data/supportData';

console.log(supportTickets)

const route = useRoute()

const ticketId = parseInt(route.params.id)

const ticket = supportTickets.find(t => t.id === ticketId)

const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('no-NO', {
        dateStyle: 'medium',
        timeStyle: 'short'
    })
}
</script>

<template>
    <div class="ticket-details" v-if="ticket">
    <h2>{{ ticket.subject }}</h2>
    <p><strong>Kunde:</strong> {{ ticket.customer }}</p>
    <p><strong>Status:</strong> {{ ticket.status }}</p>
    <p><strong>Prioritet:</strong> {{ ticket.priority }}</p>
    <p><strong>Tildelt til:</strong> {{ ticket.assignee }}</p>
    <p><strong>Beskrivelse:</strong> {{ ticket.description }}</p>
    <p><strong>Opprettet:</strong> {{ formatDate(ticket.timestamp) }}</p>

    <router-link to="/home" class="back-link">← Tilbake til oversikten</router-link>
  </div>

  <div v-else class="not-found">
    <h2>Fant ikke saken</h2>
    <router-link to="/home">Tilbake</router-link>
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