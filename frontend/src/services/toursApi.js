/**
 * Tours Service API client
 * Communicates with the Tours microservice at http://localhost:8081
 */

const TOURS_SERVICE_URL = 'http://localhost:8081'

/**
 * Fetches all tours from the Tours Service.
 * @returns {Promise<Array>} list of tour objects
 */
export async function fetchTours() {
  const response = await fetch(`${TOURS_SERVICE_URL}/tours`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch tours: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

/**
 * Creates a new tour via the Tours Service.
 * @param {{ name: string, location: string, price: number }} tourData
 * @returns {Promise<Object>} the created tour object with its generated ID
 */
export async function createTour(tourData) {
  const response = await fetch(`${TOURS_SERVICE_URL}/tours`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: tourData.name,
      location: tourData.location,
      price: parseFloat(tourData.price),
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`Failed to create tour: ${response.status} — ${errorBody}`)
  }

  return response.json()
}
