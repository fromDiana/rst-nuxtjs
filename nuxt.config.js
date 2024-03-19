export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RST',
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/poppins.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/smooth-scroll.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  build: {
    extend(config, { isDev, isClient }) {
      if (isClient) {
        const babelOptions = {
          presets: [
            [
              '@nuxt/babel-preset-app',
              {
                targets: isDev ? { chrome: 'last 2 versions' } : { ie: 11 }
              }
            ]
          ]
        };
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js' },
      { code: 'sk', iso: 'sk-SK', file: 'sk.js' }
    ],
    defaultLocale: 'sk',
    lazy: true, // Enable lazy-load translations
    langDir: 'locales/', // Directory where language files are stored
    vueI18n: {
      fallbackLocale: 'sk',
    },
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'index',
          path: '/',
          component: resolve(__dirname, 'pages/index.vue'),
        },
        {
          name: 'diagnostika',
          path: '/servis-pc-notebook-kosice/',
          component: resolve(__dirname, 'pages/diagnostika.vue'),
        },
        {
          name: 'notebook',
          path: '/notebook-kosice/',
          component: resolve(__dirname, 'pages/notebook.vue'),
        },
        {
          name: 'oprava',
          path: '/oprava-pc-notebook-kosice/',
          component: resolve(__dirname, 'pages/oprava.vue'),
        },
        {
          name: 'portfolio',
          path: '/portfolio-pc-servis-kosice/',
          component: resolve(__dirname, 'pages/portfolio.vue'),
        },
        {
          name: 'privacy-policy',
          path: '/privacy-policy/',
          component: resolve(__dirname, 'pages/privacy-policy.vue'),
        },
        {
          name: 'skladanie',
          path: '/pc-kosice/',
          component: resolve(__dirname, 'pages/skladanie.vue'),
        },
        {
          name: 'udrzba',
          path: '/udrzba-pc-kosice/',
          component: resolve(__dirname, 'pages/udrzba.vue'),
        },
      )
    },
  },
}