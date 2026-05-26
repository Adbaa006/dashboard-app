<script setup>
import { ref } from 'vue'
import { createTicket } from '@/services/api'

const emit = defineEmits([
  'create-ticket'
])

const subject = ref('')
const customer = ref('')
const description = ref('')
const assigned = ref('')
const status = ref('')
const priority = ref('')


const submitTicket = async () => {

  await createTicket({

    subject: subject.value,

    customer: customer.value,

    description: description.value,

    assigned: assigned.value,

    status: status.value,

    priority: priority.value
  })

  alert('Ticket created')
}
</script>


<template>
  <h2 class="table-title">Support tickets</h2>
  <div class="lageTicket">
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
      v-model="assigned"
      placeholder="Assigned"
    />

    <input 
      v-model="status"
      placeholder="Status"
    />

    <input 
      v-model="priority"
      placeholder="Priority"
    />
  </div>
  <button @click="submitTicket">
    Create
  </button>
  

</template>

<style scoped>
* {
  outline: 5px solid red;
}
.lageTicket {
  display: flex;
  flex-direction: row;
}
input {
  width: 5rem;
}
button {
  width: 5rem;
}
</style>