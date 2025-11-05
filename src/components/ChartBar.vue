<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, Title, Tooltip } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Title, Tooltip)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    { label: '2020', data: [12, 19, 3, 5, 2, 3], backgroundColor: '#ffb703' },
    { label: '2021', data: [8, 11, 5, 8, 3, 7], backgroundColor: '#023047' }
  ]
}
const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Monthly Sales' }
  }
}
</script>

<template>
  <Bar :data="data" :options="options" />
</template>
