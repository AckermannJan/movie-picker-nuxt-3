import { Config } from 'tailwindcss'

export default <Config> {
  theme: {},
  plugins: [],
  content: [
    `./src/components/**/*.{vue,js}`,
    `./src/layouts/**/*.vue`,
    `./src/pages/**/*.vue`,
    `./src/composables/**/*.{js,ts}`,
    `./src/plugins/**/*.{js,ts}`,
    `./src/App.{js,ts,vue}`,
    `./src/app.{js,ts,vue}`
  ]
}
