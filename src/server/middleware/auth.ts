import axios from "axios";
import { unauthenticated } from "~/server/utils/errorCodes";

export default defineEventHandler(async (event) => {
    const cookies = useCookies(event)
    const authUrl = 'https://vffskt-movie-picker.netlify.app/.netlify/identity/user'

    try {

        if(event.req.url.includes('/api')) {
            if(!cookies.nf_jwt) {
                return createError({
                    statusCode: unauthenticated.code,
                    statusMessage: unauthenticated.message
                })
            }
            await axios.get(authUrl, {
                headers: {
                    'Authorization': `Bearer ${cookies.nf_jwt}`
                }
            })
        }
    } catch (e) {
        throw createError({
            statusCode: e.response.status,
            statusMessage: unauthenticated.message
        })
    }
})