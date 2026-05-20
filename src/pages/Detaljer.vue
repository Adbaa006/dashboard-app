<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getTicket } from '@/services/api'
import { deleteTicket } from '@/services/api'

const route = useRoute()

const ticket = ref(null)


onMounted(async () => {

  ticket.value = await getTicket(
    route.params.id
  )

  console.log(ticket.value)
})

const formatDate = (timestamp) => {

  return new Date(timestamp).toLocaleString('no-NO', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })
}

const removeTicket = async () => {

  const firstConfirm = confirm(
    'Are you sure you want to delete this ticket?'
  )

  if (!firstConfirm) return


  const secondConfirm = confirm(
    'This action cannot be undone. Delete permanently?'
  )

  if (!secondConfirm) return


  await deleteTicket(ticket.value.id)

  alert('Ticket deleted')

  router.push('/support')
}
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
    <div class="bottom">
      <div class="link">
        <router-link to="/support" class="back-link"><p>Back to the menu</p></router-link>
      </div>
      <button
        class="delete-btn"
        @click="removeTicket"
        >
        <p>Delete Ticket</p>
      </button>
    </div>
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
.delete-btn {
  background: #d9534f;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  margin: 20px;
}
.delete-btn:hover {
  opacity: 0.9;
}
.link {
  margin-top: 20px;
}
.bottom {
  display: flex;
  justify-content: space-between;
}
</style>