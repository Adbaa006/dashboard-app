<script setup>
import { ref, onMounted } from 'vue'

import CreateTicket from '@/components/CreateTicket.vue'
import CompleteTable from '@/components/CompleteTable.vue'

import {
  getTickets,
  createTicket
} from '@/services/api'


const tickets = ref([])


const loadTickets = async () => {

  tickets.value = await getTickets()
}


onMounted(loadTickets)


const handleCreateTicket = async (ticketData) => {

  await createTicket(ticketData)

  await loadTickets()
}
</script>


<template>

  <CreateTicket
    @create-ticket="handleCreateTicket"
  />

  <CompleteTable
    :tickets="tickets"
  />

</template>