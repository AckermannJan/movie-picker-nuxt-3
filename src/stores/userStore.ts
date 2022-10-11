import {user} from "~/types/user";

export const useUserStore = defineStore('user', () => {
    const user = ref({
        email: null,
        access_token: null,
        expires_at: null,
        refresh_token: null,
        token_type: null,
    })

    function setUser(newUser: user) {
        user.value = newUser
    }

    return { user, setUser }
})