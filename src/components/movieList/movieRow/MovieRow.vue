<template>
  <div class="mb-8 flex w-full rounded-md bg-slate-50 shadow-sm">
    <Cover :cover="props.movie.poster_path" />
    <Details :title="props.movie.title" :release-date="props.movie.release_date" :overview="props.movie.overview" />
  </div>
</template>

<script setup lang="ts">
import { movie as movieType } from '~/types/movie'
import Cover from '~/components/movieList/movieRow/Cover.vue'
import Details from '~/components/movieList/movieRow/Details.vue'

interface Props {
  movie: movieType
}

const props = defineProps<Props>()
</script>
