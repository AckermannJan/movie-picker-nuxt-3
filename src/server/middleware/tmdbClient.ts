export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  event.context.tmdbBaseUrl = `
     https://api.themoviedb.org/3/search/movie?api_key=${config.tmdbSecret}&language=en-US&page=1&include_adult=true
  `
})
