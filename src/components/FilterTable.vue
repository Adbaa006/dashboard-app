<script setup>
import { ref, computed } from 'vue'
import { supportTickets } from '@/data/supportData'

const emit = defineEmits(['select-ticket'])

const selectTicket = (id) => {
  emit('select-ticket', id)
}

const statusClass = (status) => {
  switch (status) {
    case 'Open': return 'status-open'
    case 'In Progress': return 'status-progress'
    case 'Resolved': return 'status-resolved'
    case 'Closed': return 'status-closed'
    default: return ''
  }
}

const priorityClass = (priority) => {
  switch (priority) {
    case 'High': return 'priority-high'
    case 'Medium': return 'priority-medium'
    case 'Low': return 'priority-low'
    default: return ''
  }
}

const filter = ref('All')

const filteredTickets = computed(() => {
  if (filter.value === 'All') return supportTickets
  return supportTickets.filter(t => t.status === filter.value)
})
</script>

<template>
  <div>
    <div class="filter-bar">
      <h2 class="table-title">Support tickets</h2>
      <label>Filter: </label>
      <select v-model="filter">
        <option value="All">All</option>
        <option value="Open">Open</option>
        <option value="In Progress">In progress</option>
        <option value="Resolved">Resolved</option>
        <option value="Closed">Closed</option>
      </select>
    </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Priority</th>
          <th>Customer</th>
          <th>Subject</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ticket in filteredTickets" :key="ticket.id" @click="selectTicket(ticket.id)">
          <td>{{ ticket.id }}</td>
          <td>
            <span :class="['badge', priorityClass(ticket.priority)]">
              {{ ticket.priority }}
            </span>
          </td>
          <td>{{ ticket.customer }}</td>
          <td>{{ ticket.subject }}</td>
          <td>
            <span :class="['badge', statusClass(ticket.status)]">
              {{ ticket.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.tickets-table {
  padding: 3rem;
  overflow-x: auto;
}
h2 {
  color: rgb(0, 8, 22);
}
p {
  color: rgb(0, 8, 22);
  padding-left: 2rem;
}
.table-title {
  margin-bottom: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: left;
  padding: 0.75rem;
  border-bottom: 2px solid #175073;
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
}

td {
  padding: 0.75rem;
  border-bottom: 1px solid #175073;
  font-size: 0.9rem;
}

tr:hover {
  background: #f0f0f0;
}

.badge {
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: whitesmoke;
}

.status-open { background: #b91c1c; }       
.status-progress { background: #f59e0b; }   
.status-resolved { background: #22c55e; }   
.status-closed { background: #6b7280; }     

.priority-high { background: #b91c1c; }
.priority-medium { background: #f59e0b; }
.priority-low { background: #22c55e; }

.clickable-row {
  cursor: pointer;
  transition: background 0.2s;
}

.clickable-row:hover {
  background: #a4a4a4;
}
</style>