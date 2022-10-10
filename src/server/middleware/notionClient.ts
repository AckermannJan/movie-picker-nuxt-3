import {Client} from "@notionhq/client";

export default defineEventHandler((event) => {
    const config = useRuntimeConfig();
    event.context.notionClient = new Client({
        auth: config.notionSecret,
    })
})