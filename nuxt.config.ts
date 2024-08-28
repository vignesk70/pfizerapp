// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate:{ netlify:'2024-04-03'},
  
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts','@vueuse/nuxt',],
  googleFonts: {
    download: true,
    outputDir: 'assets',
    stylePath: 'google-fonts.css',
    fontsDir: 'fonts',
    fontsPath: 'fonts',
    families: {
      "Open+Sans":true
    },
    display: 'swap',
  },

})