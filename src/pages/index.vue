<template>
  <div id="netlify-modal" />
  <Search />
  <MovieList />
  <button class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700" @click="increment">
    Count is: {{ count }}</button
  ><br />
  <button class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700" @click="fetchData">
    Fetch data
  </button>

  {{ res }}<br />
  <button class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700" @click="login">Login</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { open, close, on, init, currentUser } from 'netlify-identity-widget'
import { useUserStore } from '@/stores/userStore'
import Search from '~/components/search/Search.vue'

const userStore = useUserStore()

// reactive state
const count = ref(0)
const res = ref('')

// functions that mutate state and trigger updates
function increment(): void {
  count.value++
}

function fetchData() {
  useFetch('/api/searchTmdbMovie?query=Inception')
    .then(({ data }) => {
      console.log(data)
      res.value = JSON.stringify(data)
    })
    .catch((e) => {
      console.log(e)
    })
}

function login() {
  const action = 'login'
  open(action)
  on(action, (user) => {
    userStore.setUser({
      email: user.email,
      access_token: user.token.access_token,
      expires_at: user.token.expires_at,
      refresh_token: user.token.refresh_token,
      token_type: user.token.token_type,
    })
    close()
  })
}

// lifecycle hooks
onMounted(() => {
  try {
    useFetch('/api/people').then((res) => console.log(res))

    init({
      container: '#netlify-modal',
      APIUrl: 'https://vffskt-movie-picker.netlify.app/.netlify/identity',
    })
    const user = currentUser()
    userStore.setUser({
      email: user.email,
      access_token: user.token.access_token,
      expires_at: user.token.expires_at,
      refresh_token: user.token.refresh_token,
      token_type: user.token.token_type,
    })
  } catch (e) {
    console.info('could not get user')
  }
})
</script>
