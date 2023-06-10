import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  ssr: true,

  css: ['/assets/styles/main.scss'],

  vite: {
    optimizeDeps: { exclude: ['fsevents'] },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '/assets/styles/_mixins';
            @import '/assets/styles/_variables';
            @import '/assets/styles/where';
          `
        }
      }
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('~~/', import.meta.url))
      }
    }
  },

  modules: [
    // Linter
    '@nuxtjs/eslint-module',

    // Performance
    '@nuxtjs/web-vitals',
    '@nuxtjs/fontaine',
    'nuxt-delay-hydration',

    // Images optimisers
    'nuxt-svgo',

    // SEO
    '@nuxtjs/robots',

    // Utilities
    'nuxt-viewport',
    '@vueuse/nuxt'
  ],

  delayHydration: {
    mode: 'mount',
    debug: process.env.NODE_ENV === 'development'
  },

  svgo: {
    svgoConfig: {
      plugins: ['prefixIds']
    }
  },

  webVitals: {
    debug: false,
    disabled: true
  },

  devtools: { enabled: true }
})
