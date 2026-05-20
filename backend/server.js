const express = require('express')
const cors = require('cors')
const fs = require('fs-extra')
const path = require('path')

const app = express()

const PORT = 3000

app.use(cors())
app.use(express.json())


const DATA_FILE = path.join(__dirname, 'data', 'tickets.json')


// HENT DATA

async function readTickets() {

  const data = await fs.readJson(DATA_FILE)

  return data
}


// LAGRE DATA

async function saveTickets(tickets) {

  await fs.writeJson(DATA_FILE, tickets, { spaces: 2 })
}


// HENTE ALT

app.get('/tickets', async (req, res) => {

  const tickets = await readTickets()

  res.json(tickets)
})


// HENTE ENKEL

app.get('/tickets/:id', async (req, res) => {

  const tickets = await readTickets()

  const ticket = tickets.find(
    t => t.id === Number(req.params.id)
  )

  res.json(ticket)
})


// LAG NY

app.post('/tickets', async (req, res) => {

  const tickets = await readTickets()

  const nextId = tickets.length > 0
  ? Math.max(...tickets.map(t => t.id)) + 1
  : 1

  const newTicket = {
    id: nextId,

    customer: req.body.customer,

    subject: req.body.subject,

    description: req.body.description,

    status: req.body.status,

    priority: req.body.priority,

    assignee: req.body.assignee,

    timestamp: new Date().toISOString()
  }

  tickets.push(newTicket)

  await saveTickets(tickets)

  res.status(201).json(newTicket)
})


// OPPDATER

app.put('/tickets/:id', async (req, res) => {

  const tickets = await readTickets()

  const index = tickets.findIndex(
    t => t.id === Number(req.params.id)
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

  await saveTickets(tickets)

  res.json(tickets[index])
})


// SLETT

app.delete('/tickets/:id', async (req, res) => {

  const tickets = await readTickets()

  const filtered = tickets.filter(
    t => t.id !== Number(req.params.id)
  )

  await saveTickets(filtered)

  res.json({
    message: 'Ticket deleted'
  })
})


app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})