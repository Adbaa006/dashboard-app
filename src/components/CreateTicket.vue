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
      <textarea
        v-model="description"
        placeholder="Description"
      />
    </div>
    <div class="input3">
      <select v-model="assigned">
        <option disabled value="">Assigned</option>
        <option>Jordan Reed</option>
        <option>Taylor Morgan</option>
        <option>Alex Chen</option>
      </select>
    </div>
    <div class="input4">
      <select v-model="status">
        <option disabled value="">Status</option>
        <option>Open</option>
        <option>In progress</option>
        <option>Resolved</option>
        <option>Closed</option>
      </select>
      <select v-model="priority">
        <option disabled value="">Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
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
.input1,
.input4 {
  display: flex;
  flex-direction: row;
  width: 40rem;
  gap: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.input1 input {
  flex: 1;
  height: 100%;
  min-width: 0;
  padding: 0.75rem;
  box-sizing: border-box;
  border-radius: 6px;
}
.input4 select {
  flex: 1;
  height: 100%;
  min-width: 0;
  padding: 0.75rem;
  box-sizing: border-box;
  border-radius: 6px;
}
.input2 {
  width: 40rem;
  height: 5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

}
.input2 textarea {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0.75rem;
  resize: none;
  vertical-align: top;
  border-radius: 6px;
}
.input3 {
  width: 40rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.input3 select {
  height: 100%;
  width: 100%;
  padding: 0.75rem;
  box-sizing: border-box;
  border-radius: 6px;
}
button {
  width: 10rem;
  background-color: #22c55e;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 6px;
}
</style>