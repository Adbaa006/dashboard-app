<script setup>
    import { useRouter } from 'vue-router';
    import { ref, onMounted } from 'vue';
    import CompleteTable from '@/components/CompleteTable.vue';
    import { getTickets, createTicket } from '@/services/api';
import CreateTicket from '@/components/CreateTicket.vue';

    const tickets = ref ([])
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
        router.push('/detaljer/${id}')
    }

</script>

<template>

    <CreateTicket
        @create-ticket="handleCreateTicket"
    />

    <CompleteTable
    :tickets="tickets"
    @select-ticket="openTicket"
    />

</template>

<style scoped>
.tabell {
    background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
</style>