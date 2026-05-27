const API_URL = '/tickets'


export async function getTickets() {

  const response = await fetch(`/tickets/${id}`)

  return await response.json()
}


export async function createTicket(ticket) {

  const response = await fetch(`/tickets/${id}`, {

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
    `/tickets/${id}`
  )

  return await response.json()
}

export async function deleteTicket(id) {

  const response = await fetch(
    `/tickets/${id}`,
    {
      method: 'DELETE'
    }
  )

  return await response.json()
}

export async function updateTicket(id, updatedTicket) {
  const response = await fetch(` /tickets/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedTicket)
  })

  return await response.json()
}