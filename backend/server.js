const path = require('path')
const express = require('express')
const cors = require('cors')
const fs = require('fs-extra')
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const ticketsFile = path.join(__dirname, 'data', 'ticket.json')

console.log(__dirname)

// Get data

function readTickets() {
    const data = fs.readFileSync(ticketsFile, 'utf8')
    return JSON.parse(data)
}

// Save data

function saveTickets(tickets) {
    fs.writeFileSync(
        ticketsFile,
        JSON.stringify(tickets, null, 2)
    )
}

// Get all tickets

app.get('/tickets', (req, res) => {
    const tickets = readTickets()
    res.json(tickets)
})

// Get one ticket

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

// Create new ticket

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

// Update ticket

app.push('/tickets/:id', (req, res) => {
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

// Delete ticket

app.delete('/tickets/:id', (req, res) => {
    const tickets = readTickets()
    const filteredTickets = tickets.filter(
        t => t.id != req.params.id
    )
    // Give new ticket number
    const updatedTickets = filteredTickets.map((ticket, index) => ({
        ...ticket,
        ticketNumber: index + 1
    }))
    saveTickets(updatedTickets)
    res.json({
        message: 'Ticket deleted'
    })
})

// Serve frontend

app.use(
    express.static(
        path.join(__dirname, '../dist')
    )
)

app.get(/,*/, (req, res) => {
    res.sendFile(
        path.join(__dirname, '../dist/index.html')
    )
})

app.listen(3000, "0.0.0.0", () => {
    console.log('Server running on port 3000')
})