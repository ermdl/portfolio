// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    'nuxt-icon',
    '@pinia/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    'nuxt-swiper',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxthq/studio',
  ],
  colorMode: {
    classSuffix: '',
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  icon: {
    defaultIconPack: 'lucide',
  },
  imports: {
    dirs: ['types/*.ts', 'types/**/*.ts'],
  },
  pinia: {
    storesDirs: ['store/**'],
  },
  shadcn: {
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
})
