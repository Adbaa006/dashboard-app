const path = require('path')
const express = require('express')
const cors = require('cors')
const fs = require('fs-extra')

const app = express()

const PORT = 3000

app.use(cors())
app.use(express.json())


const ticketsFile = path.join(__dirname, 'data', 'tickets.json')

console.log(__dirname)

// HENT DATA

function readTickets() {
  const data = fs.readFileSync(ticketsFile, 'utf8')
  return JSON.parse(data)
}


// LAGRE DATA

function saveTickets(tickets) {
  fs.writeFileSync(
    ticketsFile,
    JSON.stringify(tickets, null, 2)
  )
}


// HENTE ALT

app.get('/tickets', (req, res) => {

  const tickets = readTickets()
  res.json(tickets)
})


// HENTE ENKEL

app.get('/tickets/:id', (req, res) => {

  const tickets = readTickets()

  const ticket = tickets.find(
    t => t.id == (req.params.id)
  )

  if (!ticket) {
    return res.status(404) .json({
      message: 'Ticket not found'
    })
  }

  res.json(ticket)
})


// LAG NY

app.post('/tickets', (req, res) => {

  const tickets = readTickets()

  const nextTicketNumber = tickets.length + 1

  const newTicket = {
    id: Date.now(),

    ticketNumber: nextTicketNumber,

    customer: req.body.customer,

    subject: req.body.subject,

    description: req.body.description,

    status: req.body.status,

    priority: req.body.priority,

    assignee: req.body.assignee,

    timestamp: new Date().toISOString()
  }

  tickets.push(newTicket)

  saveTickets(tickets)

  res.status(201).json(newTicket)
})


// OPPDATER

app.put('/tickets/:id', (req, res) => {

  const tickets = readTickets()

  const index = tickets.findIndex(
    t => t.id == (req.params.id)
  )

  if (index === -1) {
    return res.status(404).json({
      message: 'Ticket not found'
    })
  }

  tickets[index] = {
    ...tickets[index],
    ...req.body
  }

  saveTickets(tickets)

  res.json(tickets[index])
})


// SLETT

app.delete('/tickets/:id', (req, res) => {

  const tickets = readTickets()

  const filteredTickets = tickets.filter(
    t => t.id != req.params.id
  )

  // Gi nye ticketnummer
  const updatedTickets = filteredTickets.map((ticket, index) => ({

    ...ticket,

    ticketNumber: index + 1
  }))

  saveTickets(updatedTickets)

  res.json({
    message: 'Ticket deleted'
  })
})


//
// SERVE FRONTEND
//

app.use(
  express.static(
    path.join(__dirname, '../dist')
  )
)


// Vue Router support
app.get(/.*/, (req, res) => {

  res.sendFile(
    path.join(__dirname, '../dist/index.html')
  )
})


//
// START SERVER
//

app.listen(3000, "0.0.0.0", () => {

  console.log(`Server running on port 3000`)
})
