<script setup>
    import FilterTable from '@/components/FilterTable.vue';
import Lagtickets from '@/components/lagtickets.vue';
    import MeldingTabel from '@/components/MeldingTabel.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()

    const openTicket = (id) => {
        router.push({ name: 'Detaljer', params: { id } })
    }
</script>

<template>
    <div class="tabell">
        <FilterTable @select-ticket="openTicket"/>
    </div>
    <div class="legge-til-ticket">
        <Lagtickets/>
    </div>
</template>

<style scoped>
.tabell {
    background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
</style>