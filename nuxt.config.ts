// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', [
    "@nuxtjs/google-fonts",
    {
      families: {
        'Unbounded': {
          wght: [300, 400, 500, 600, 700],
        },
        'Space+Grotesk': {
          wght: [300, 400, 500, 600, 700],
        }
      }
    }
  ], 'v-gsap-nuxt']
})
