import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  // ----------------------------------
  // config below
  modules: [
    '@nuxt/ui'
  ],
  css: ['~/assets/css/styles.css'],
  ui: {
    prefix: 'Nuxt',
  },
  vite: {
    // plugins: [tailwindcss()],
    // optimizeDeps: {
    //   exclude: [
    //     'nuxt-nightly'
    //   ]
    // }
  }
})
