export default defineEventHandler(async (event) => {
    let params, body
    event.req.method === 'POST'
        ? body = await useBody(event)
        : params = await useQuery(event)
    console.log({method: event.req.method, url: event.req.url, params: params || {}, body: body || {}})
})