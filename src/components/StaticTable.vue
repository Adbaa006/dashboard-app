<script setup>
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

<template>
    <div class="tickets-table">
        <h2 class="table-title">Support tickets</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                     <th>Priority</th>
                    <th>Customer</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Assigned</th>
                    <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="ticket in tickets" :key="ticket.id">
                    <td>{{ ticket.ticketNumber }}</td>
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
                    <td>{{ ticket.assignee }}</td>
                    <td>{{ formatDate(ticket.timestamp) }}</td>
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

.status-open { background: #ef4444; }       
.status-progress { background: #f59e0b; }   
.status-resolved { background: #10b981; }   
.status-closed { background: #6b7280; }     

.priority-high { background: #b91c1c; }
.priority-medium { background: #f59e0b; }
.priority-low { background: #22c55e; }
</style>