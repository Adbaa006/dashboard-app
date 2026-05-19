<script setup>
import { ref } from 'vue'
import { createTicket } from '@/services/api'

const subject = ref('')
const customer = ref('')


const submitTicket = async () => {

  await createTicket({

    subject: subject.value,

    customer: customer.value,

    description: 'Test',

    status: 'Open',

    priority: 'Medium'
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

  <button @click="submitTicket">
    Create
  </button>

</template>