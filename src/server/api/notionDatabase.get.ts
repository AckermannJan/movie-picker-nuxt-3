export default defineEventHandler(async (event) => {
    const databaseId = 'e0e90a4764f24689a512ba1a62d28971'
    // const payload = JSON.parse(event.body)
    // const startCursor = payload.startCursor ? payload.startCursor : undefined

    // FILTERS
    try {
        return await event.context.notionClient.databases.query({
            database_id: databaseId,
            // start_cursor: startCursor,
            // filter: {
            //   and: [
            //     {
            //       property: 'Genre',
            //       select: {
            //         equals: 'Horror'
            //       }
            //     }
            //   ]
            // }
        })
    } catch (e) {
        throw createError({
            statusCode: e.status,
            statusMessage: e.message
        })
    }
})