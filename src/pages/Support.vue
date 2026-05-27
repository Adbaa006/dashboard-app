<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import CreateTicket from '@/components/CreateTicket.vue'
import CompleteTable from '@/components/CompleteTable.vue'

import {
  getTickets,
  createTicket
} from '@/services/api'


const tickets = ref([])
const router = useRouter()

const loadTickets = async () => {

  tickets.value = await getTickets()
}


onMounted(loadTickets)


const handleCreateTicket = async (ticketData) => {

  await createTicket(ticketData)

  await loadTickets()
}

const openTicket = (id) => {

  router.push(`/detaljer/${id}`)
}
</script>


<template>
  <CompleteTable
  :tickets="tickets"
  @select-ticket="openTicket"
  
  <CreateTicket
    @create-ticket="handleCreateTicket"
  />
/>

</template>