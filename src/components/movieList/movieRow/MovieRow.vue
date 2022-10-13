<template>
  <div class="w-full bg-slate-50 mb-8 rounded-md shadow-sm flex">
    <Cover :cover="movie.poster_path"/>
    <Details :title="movie.title" :release-date="movie.release_date" :overview="movie.overview" />
  </div>
</template>

<script setup lang="ts">
import {movie} from "~/types/movie";
import Cover from "~/components/movieList/movieRow/Cover.vue";
import Details from "~/components/movieList/movieRow/Details.vue";

export interface Props {
  movie: movie
}

const { movie } = defineProps<Props>()
</script>