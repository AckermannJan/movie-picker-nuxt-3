import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: "src/",
    modules: [
        '@nuxtjs/tailwindcss',
        [
            '@pinia/nuxt', {
                autoImports: [
                    'defineStore'
                ]
            },
        ],
    ],
    runtimeConfig: {
        notionSecret: process.env.NOTION_SECRET,
        tmdbSecret: process.env.TMDB_SECRET,
    },
})
