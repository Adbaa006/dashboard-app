<script setup>
    import FilterTable from '@/components/FilterTable.vue';
    import MeldingTabel from '@/components/MeldingTabel.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()

    const openTicket = (id) => {
        router.push({ name: 'Detaljer', params: {id } })
    }
</script>

<template>
    <div class="tabell">
        <FilterTable @select-ticket="openTicket"/>
    </div>
</template>

<style scoped>
.tabell {
    padding: 4rem;
}
</style>