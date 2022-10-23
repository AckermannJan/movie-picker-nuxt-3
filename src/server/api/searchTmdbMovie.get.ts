import axios from 'axios'

export default defineEventHandler(async (event) => {
  const { query } = useQuery(event)

  const { data } = await axios.get(`${event.context.tmdbBaseUrl}&query=${query}`)

  return data
})
