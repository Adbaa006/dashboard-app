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
    <div class="input1">
      <input
        v-model="subject"
        placeholder="Subject"
      />
      <input
        v-model="customer"
        placeholder="Customer"
      />
    </div>
    <div class="input2">
      <input 
        v-model="description"
        placeholder="Description"
      />
    </div>
    <div class="input3">
      <input 
        v-model="assigned"
        placeholder="Assigned"
      />
    </div>
    <div class="input1">
      <input 
        v-model="status"
        placeholder="Status"
      />
      <input 
        v-model="priority"
        placeholder="Priority"
      />
    </div>
  </div>
  <button @click="submitTicket">
    <p>Create</p>
  </button>
  
</template>

<style scoped>
.lageTicket {
  display: flex;
  flex-direction: column;
}
.input1 {
  display: flex;
  flex-direction: row;
  width: 15rem;
}
.input2 {
  width: 30rem;
  height: 5rem;
}
.input3 {
  width: 30rem;
}
.input1 input,
.input2 input,
.input3 input {
  height: 100%;
  width: 100%;
}
button {
  width: 10rem;
}
</style>