<template>
  <div id="netlify-modal" />
  <Search />
  <MovieList />
  <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="increment"
  >
    Count is: {{ count }}
  </button><br>
  <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="fetchData"
  >
    Fetch data
  </button>

  {{ res }}<br>
  <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="login"
  >
    Login
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import netlifyIdentity from 'netlify-identity-widget'
import { useUserStore } from '@/stores/userStore'
import Search from "~/components/search/Search.vue";

const userStore = useUserStore()

// reactive state
const count = ref(0)
const res = ref("")

// functions that mutate state and trigger updates
function increment(): void {
  count.value++
}

async function fetchData() {
  useFetch('/api/searchTmdbMovie?query=Inception').then(({data}) => {
    console.log(data)
    res.value = JSON.stringify(data)
  }).catch((e) => {
    console.log(e)
  })
}

function login() {
  const action = 'login'
  netlifyIdentity.open(action);
  netlifyIdentity.on(action, user => {
    userStore.setUser({
      email: user.email,
      access_token: user.token.access_token,
      expires_at: user.token.expires_at,
      refresh_token: user.token.refresh_token,
      token_type: user.token.token_type
    })
    netlifyIdentity.close();
  });
}

// lifecycle hooks
onMounted(() => {
  try {
    netlifyIdentity.init({
      container: '#netlify-modal',
      APIUrl: "https://vffskt-movie-picker.netlify.app/.netlify/identity",
    });
    const user = netlifyIdentity.currentUser();
    userStore.setUser({
      email: user.email,
      access_token: user.token.access_token,
      expires_at: user.token.expires_at,
      refresh_token: user.token.refresh_token,
      token_type: user.token.token_type
    })
  } catch (e) {
    console.info('could not get user')
  }
})
</script>