export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rst',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
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
          name: 'diagnostika',
          path: '/servis-pc-notebook-kosice',
          component: resolve(__dirname, 'pages/diagnostika.vue'),
        },
        {
          name: 'notebook',
          path: '/notebook-kosice',
          component: resolve(__dirname, 'pages/notebook.vue'),
        },
        {
          name: 'oprava',
          path: '/oprava-pc-notebook-kosice',
          component: resolve(__dirname, 'pages/oprava.vue'),
        },
        {
          name: 'portfolio',
          path: '/portfolio-pc-servis-kosice',
          component: resolve(__dirname, 'pages/portfolio.vue'),
        },
        {
          name: 'privacy-policy',
          path: '/privacy-policy',
          component: resolve(__dirname, 'pages/privacy-policy.vue'),
        },
        {
          name: 'skladanie',
          path: '/pc-kosice',
          component: resolve(__dirname, 'pages/skladanie.vue'),
        },
        {
          name: 'udrzba',
          path: '/udrzba-pc-kosice',
          component: resolve(__dirname, 'pages/udrzba.vue'),
        },
      )
    },
    // scrollBehavior(to, from, savedPosition) {
    //   if (savedPosition) {
    //     return savedPosition;
    //   }

    //     // Wait for the out transition to complete (if necessary)
    //     window.$nuxt.$once('triggerScroll', () => {
    //       // The to.hash check is for hash navigation
    //       if (to.hash) {
    //         // this.$smoothScrollTo(to.hash, 400, 700);
    //         {
    //           setTimeout(() => {
    //             const element = document.querySelector(to.hash);
    //             if (!element) return;

    //             const startingY = window.scrollY;
    //             const elementRect = element.getBoundingClientRect();
    //             const viewportHeight = window.innerHeight;
    //             // Calculate the top offset to align the element to the middle of the viewport
    //             const elementY = startingY + elementRect.top - (viewportHeight / 2) + (elementRect.height / 2);
    //             const diff = elementY - startingY;
    //             let start;

    //             // Easing function: ease-out effect
    //             const easing = t => 1 - Math.pow(1 - t, 2);

    //             window.requestAnimationFrame(function step(timestamp) {
    //               if (!start) start = timestamp;
    //               const time = timestamp - start;
    //               let percent = Math.min(time / duration, 1);
    //               percent = easing(percent);

    //               window.scrollTo(0, startingY + diff * percent);

    //               if (time < 700) {
    //                 window.requestAnimationFrame(step);
    //               }
    //             });
    //           }, 400);
    //         }
    //       } else {
    //         // Scroll to the top of the page
    //         window.scrollTo({ top: 0, behavior: 'smooth' });
    //     });
    //   });
    // },
  },
}