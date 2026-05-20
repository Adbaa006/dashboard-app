const API_URL = 'http://localhost:3000/tickets'


export async function getTickets() {

  const response = await fetch(API_URL)

  return await response.json()
}


export async function createTicket(ticket) {

  const response = await fetch(API_URL, {

    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(ticket)
  })

  return await response.json()
}

export async function getTicket(id) {

  const response = await fetch(
    `http://localhost:3000/tickets/${id}`
  )

  return await response.json()
}