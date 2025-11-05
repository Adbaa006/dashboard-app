<template>
  <div class="tickets-table">
    <h2 class="title">Support Tickets</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Assignee</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ticket in tickets" :key="ticket.id">
          <td>{{ ticket.id }}</td>
          <td>{{ ticket.customer }}</td>
          <td>{{ ticket.subject }}</td>
          <td>
            <span :class="['badge', statusClass(ticket.status)]">
              {{ ticket.status }}
            </span>
          </td>
          <td>
            <span :class="['badge', priorityClass(ticket.priority)]">
              {{ ticket.priority }}
            </span>
          </td>
          <td>{{ ticket.assignee }}</td>
          <td>{{ formatDate(ticket.timestamp) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { supportTickets } from '../data/mockData.js'

const tickets = supportTickets

const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })
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
</script>

<style scoped>
.tickets-table {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  padding: 1rem;
  overflow-x: auto;
}

.title {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: left;
  padding: 0.75rem;
  border-bottom: 2px solid #e0e0e0;
  background: #fafafa;
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
}

td {
  padding: 0.75rem;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.9rem;
}

tr:hover {
  background: #f9fbff;
}

.badge {
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
}

.status-open { background: #ef4444; }       /* Rød */
.status-progress { background: #f59e0b; }   /* Oransje */
.status-resolved { background: #10b981; }   /* Grønn */
.status-closed { background: #6b7280; }     /* Grå */

.priority-high { background: #b91c1c; }
.priority-medium { background: #f59e0b; }
.priority-low { background: #22c55e; }
</style>
