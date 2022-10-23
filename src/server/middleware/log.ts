export default defineEventHandler(async (event) => {
  let params, body
  event.req.method === 'POST' ? (body = await useBody(event)) : (params = await useQuery(event))

  if (event.req.url.includes('/api')) {
    console.info({
      method: event.req.method,
      url: event.req.url,
      params: params || {},
      body: body || {},
    })
  }
})
