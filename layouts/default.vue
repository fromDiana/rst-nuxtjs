<template>
  <div>
    <NavigationBar />
    <Nuxt />
    <!-- <CookiePopup /> -->
    <FooterComponent />
  </div>
</template>

<script>
export default {
  components: {
    NavigationBar: () => import('@/components/NavigationBar.vue'),
    FooterComponent: () => import('@/components/FooterComponent.vue'),
  },
  head() {
    const ogImageURL = 'https://rst.sk/opengraphmeta.jpg'; // URL of your OpenGraph image
    return {
      title: 'RST - Rýchlejšie, spoľahlivejšie, tichšie',
      meta: [
        // Facebook Meta Tags
        { property: 'og:url', content: 'https://www.rst.sk' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'RST - Rýchlejšie, spoľahlivejšie, tichšie' },
        { property: 'og:description', content: 'Oprava počítačov a notebookov. Skladanie počítačových zostáv na mieru. Diagnostika problémov so zostavami či komponentami.' },
        { property: 'og:image', content: ogImageURL }, // Added og:image meta tag

        // Twitter Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'rst.sk' },
        { property: 'twitter:url', content: 'https://www.rst.sk' },
        { name: 'twitter:title', content: 'RST - Rýchlejšie, spoľahlivejšie, tichšie' },
        { name: 'twitter:description', content: 'Oprava počítačov a notebookov. Skladanie počítačových zostáv na mieru. Diagnostika problémov so zostavami či komponentami.' },
        { name: 'twitter:image', content: ogImageURL }, // Added twitter:image meta tag
      ],
      link: this.$route.path === '/'
        ? [
          {
            rel: 'canonical',
            href: 'https://rst.sk',
          },
        ]
        : [
          {
            rel: 'canonical',
            href: 'https://rst.sk' + this.$route.path + '/',
          },
        ],

    }
  },
  // redirecting from old website
  middleware(context) {
    // console.log("middleware");
    // console.log(context.route.path);
    const oldPaths = ['/kontakty', '/slu%C5%BEby-servis-oprava-kosice',
      '/kto-sme-kosice', '/kontakty?lightbox=dataItem-kkx57qgh6',
      '/kontakty?lightbox=dataItem-kkx6l1ui'];
    const newPath = '/';
    if (oldPaths.includes(context.route.path)) {
      return context.redirect(301, newPath);
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-image: url('assets/T_Background.jpg');
  background-size: cover;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-font-smoothing: antialiased;
  font-family: "Poppins", sans-serif !important;
  font-style: normal;
  font-style: normal;
  color: white;
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  scroll-behavior: smooth;
}

body::-webkit-scrollbar {
  display: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: white;
}

.top-offset {
  margin-top: 8rem;
}

.centered-text {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 10rem 20vw;
  text-align: justify;
  min-height: 58vh;
}

.centered-text div {
  width: 60%;
}

.page-button .main-page-button-text {
  font-size: 1.4rem !important;
}

.page-button {
  width: 15rem !important;
}

/* Custom styles for H1 and H2 tags */
.custom-h1 {
  font-size: 1rem;
}

.custom-h2 {
  font-size: 1rem;
  font-weight: normal;
}

/* Custom styles for empty line */
.empty-line {
  height: 0.5rem;
}

@media (max-width: 900px) {
  .centered-text {
    padding: 10rem 2rem;
    text-align: center;
  }

  .centered-text div {
    width: 100%;
  }

  .centered-text .page-button {
    display: none !important;
  }
}
</style>
