<template>
  <img v-if="cover" :src="`https://www.themoviedb.org/t/p/w94_and_h141_bestv2/${cover}`"  alt="Movie Poster" class="rounded-l-md"/>
  <div v-else class="bg-gray-300 rounded-l-md flex" style="min-height: 141px; min-width: 94px">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="pointer-events-none inline-block fill-gray-400 h-12 m-auto">
      <path d="m42.15 46.6-4.6-4.6H9q-1.25 0-2.125-.875T6 39V10.45l-4.1-4.1L4.05 4.2 44.3 44.45ZM9 39h25.55l-6-6H12l6-7 4 5.45 2.3-2.75L9 13.4V39Zm33-1.1-3-3V9H13.1l-3-3H39q1.25 0 2.125.875T42 9ZM26.2 22.1Zm-4.4 4.15Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  cover: string | null
}

const { cover } = defineProps<Props>()
</script>