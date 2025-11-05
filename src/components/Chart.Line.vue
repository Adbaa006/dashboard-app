<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Title, Tooltip } from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Title, Tooltip)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    { label: 'Visitors', data: [300, 400, 200, 500, 600, 700], borderColor: '#fb8500', fill: false },
  ]
}
const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Visitors Trend' }
  }
}
</script>

<template>
  <Line :data="data" :options="options" />
</template>
