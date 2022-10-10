import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    rootDir: "./src",
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    runtimeConfig: {
        notionSecret: process.env.NOTION_SECRET,
        tmdbSecret: process.env.TMDB_SECRET,
    },
})
