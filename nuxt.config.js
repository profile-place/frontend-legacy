
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'profile.place',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A place for all your social profiles under one roof. Unleash your profile, express your interests, hobbies and much, much more. Oh, and did we mention, it\'s open source.'
      },
      { hid: 'keywords', name: 'keywords', content: '' },
      { hid: 'author', name: 'author', content: 'https://github.com/profile-place' },
      { hid: 'og:title', property: 'og:title', content: 'profile.place' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'A place for all your social profiles under one roof. Unleash your profile, express your interests, hobbies and much, much more. Oh, and did we mention, it\'s open source.'
      },
      { hid: 'og:image', property: 'og:image', content: '~assets/icons/logo.png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
