<script setup>
import { ref } from 'vue'
import { createTicket } from '@/services/api'

const subject = ref('')
const customer = ref('')


const submitTicket = async () => {

  await createTicket({

    subject: subject.value,

    customer: customer.value,

    description: description.value,

    status: status.value,

    priority: priority.value
  })

  alert('Ticket created')
}
</script>


<template>

  <input
    v-model="subject"
    placeholder="Subject"
  />

  <input
    v-model="customer"
    placeholder="Customer"
  />

  <input 
    v-model="description"
    placeholder="Description"
  />

  <input 
    v-model="status"
    placeholder="Status"
  />

  <input 
    v-model="priority"
    placeholder="Priority"
  />

  <button @click="submitTicket">
    Create
  </button>

</template>