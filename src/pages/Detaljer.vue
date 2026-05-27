<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getTicket, deleteTicket, updateTicket } from '@/services/api'

const route = useRoute()
const router = useRouter()

const ticket = ref(null)
const isEditing = ref(false)

const editForm = ref({
  subject: '',
  customer: '',
  description: '',
  assignee: '',
  status: '',
  priority: ''
})

onMounted(async () => {

  ticket.value = await getTicket(route.params.id)
  editForm.value = { ...ticket.value}
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

const startEditing = () => {
  editForm.value = { ...ticket.value}
  isEditing.value = true
}

const cancelEditing = () => {
  isEditing.value = false
}

const saveChanges = async () => {
  ticket.value = await updateTicket(ticket.value.id, editForm.value)
  isEditing.value = false
  alert('Ticket updated')
}

</script>

<template>
  <div v-if="ticket" class="ticket-details-page" >
    <div class="ticket-name">
      <h1>{{ ticket.subject }}</h1>
      <h3>{{ ticket.customer }}</h3>
    </div>
    <div class="ticket-details">
      <div v-if="!isEditing" class="ticket-details">
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

      <div v-else class="edit-form">
        <input v-model="editForm.subject" placeholder="Subject" />
        <input v-model="editForm.customer" placeholder="Customer" />

        <textarea v-model="editForm.description" placeholder="Description"></textarea>

        <select v-model="editForm.status">
          <option>Open</option>
          <option>In progress</option>
          <option>Resolved</option>
          <option>Closed</option>
        </select>

        <select v-model="editForm.priority">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select v-model="editForm.assignee">
          <option>Jordan Reed</option>
          <option>Taylor Morgan</option>
          <option>Alex Chen</option>
        </select>

        <button class="saveChangeBtn" @click="saveChanges">Save</button>
        <button class="cancelEditBtn" @click="cancelEditing">Cancel</button>
      </div>
    </div>
    <div class="bottom">
      <div class="link">
        <router-link to="/support" class="back-link"><p>Back to the menu</p></router-link>
      </div>
      <div class="buttons">
        <button
          v-if="!isEditing"
          class="edit-btn"
          @click="startEditing"
        >
          <p>Edit Ticket</p>
        </button>
        <button
          class="delete-btn"
          @click="removeTicket"
          >
          <p>Delete Ticket</p>
        </button>
      </div>
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
.cancelEditBtn {
  width: 5rem;
  height: 2rem;
  background: #d9534f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
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
.saveChangeBtn {
  width: 5rem;
  height: 2rem;
  background: rgb(41, 182, 41);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.saveChangeBtn:hover,
.cancelEditBtn:hover,
.edit-btn:hover,
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
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.edit-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50rem;
  padding: 1rem;
}

.edit-form input,
.edit-form textarea,
.edit-form select {
  width: 100%;
  padding: 0.75rem;
  box-sizing: border-box;
}

.edit-form textarea {
  height: 8rem;
  resize: none;
}

.edit-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  margin: 20px;
}
</style>