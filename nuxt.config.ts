// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
  ],
  colorMode: {
    darkMode: {
      primary: '#000000',
      secondary: '#000000',
    },
    lightMode: {
      primary: '#999999',
      secondary: '#999999',
  },
},
})

