<template>
  <div>
    <div id="fb-root"></div>
    <div class="main-page-image-background">
      <picture>
      <source srcset="../assets/Header_computer-4k.jpg" media="(min-width: 901px)">
      <source srcset="../assets/Header_computer-mobile.jpg" media="(max-width: 900px)">
      <img v-lazy="'../assets/Header_computer-4k.jpg'" alt="Main Page Background" class="background-image">
    </picture>
    <div class="main-logo-text">
      <div class="main-logo-text-element" style="font-size: 3.9vw; height: 3.7vw;">{{ $t('mainPage.rychlejsie') }}</div>
      <div class="main-logo-text-element" style="font-size: 5vw; height: 5.2vw;">{{ $t('mainPage.spolahlivejsie') }}</div>
      <div class="main-logo-text-element" style="font-size: 3.65vw; height: 3.65vw;">{{ $t('mainPage.tichsie') }}</div>
    </div>
  </div>

    <h1 class="main-page-buttons" id="services">
      <MainPageButton imageSrc="T_oprava_pocitacov a notebookov.png" text="mainPage.opravaPC"
        :page="'oprava-pc-notebook-kosice/'" topMargin="19rem" topMarginMobile="73%"
        alt="Oprava pocitacov a notebookov kosice" />
      <MainPageButton imageSrc="T_Skladanie_02.png" text="mainPage.skladaniePC" :page="'pc-kosice/'" topMargin="19rem"
        topMarginMobile="73%" alt="Skladanie pocitacov kosice" />
      <MainPageButton imageSrc="T_PC_Udrzba.png" text="navigationBar.udrzba" :page="'udrzba-pc-kosice/'"
        topMargin="19rem" topMarginMobile="73%" alt="Cistenie pocitacov a notebookov kosice" />
    </h1>
    <SpacerComponent :space="'3rem'" />
    <h2 class="main-page-buttons">
      <MainPageButton imageSrc="T_Diagnostika.png" text="mainPage.diagnostika" :page="'servis-pc-notebook-kosice/'"
        alt="Diagnostika pocitacov a notebookov kosice" />
      <MainPageButton imageSrc="T_Notebooky.png" text="navigationBar.notebooky" :page="'notebook-kosice/'"
        alt="repasovanie notebookov kosice" />
      <MainPageButton imageSrc="T_Portfólio.png" text="navigationBar.portfolio" :page="'portfolio-pc-servis-kosice/'"
        alt="Portfolio oprava pc kosice" />
    </h2>

    <SpacerComponent :space="'5rem'" />

    <div id="references" class="partners">
      <PartnerComponent image="game_days.png" text="partners.gameDays" page="gamedays.sk"
        alt="Logo Game Days konferencia" />
      <PartnerComponent image="games_farm.png" text="partners.gamesFarm" page="games-farm.com"
        alt="Logo herneho studia Games Farm" />
      <PartnerComponent image="triple_hill.png" text="partners.tripleHill" page="triple-hill.com"
        alt="Logo herneho studia Triple Hill" />
      <PartnerComponent image="3dvision.png" text="partners.threeDVision" page="3division.sovietrepublic.net"
        alt="Logo herneho studia 3dvision" />
    </div>

    <SpacerComponent :space="'5rem'" />
    <hr style="width: 60vw">
    <SpacerComponent :space="'5rem'" />

    <div id="about" class="about-section">
      <div class="text-container">
        <p>{{ $t("mainPage.oMneText") }}</p>
        <p>{{ $t("mainPage.kontakt") }}</p>
        <p><a href="mailto:rst@rst.sk">rst@rst.sk</a></p>
        <div class="social-icons">
          <a href="https://www.facebook.com/rstskservis" target="_blank">
            <img src="@/assets/facebook.png" class="icon" alt="Facebook kontakt rst" />
          </a>
          <a href="https://www.instagram.com/rstskservis/" target="_blank">
            <img src="@/assets/instagram.png" class="icon" alt="Instagram kontakt rst" />
          </a>
        </div>
        <p>+421 948 600 109</p>
      </div>
    </div>

    <SpacerComponent :space="'5rem'" />
  </div>
</template>

<script>
export default {
  head() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "RST - Rýchlejšie, spoľahlivejšie, tichšie",
      "url": "https://www.rst.sk",
      "logo": "https://www.rst.sk/_nuxt/img/T_RST_LOGO_06.9b43811.png",
      "description": "Oprava počítačov a notebookov. Skladanie počítačových zostáv na mieru. Diagnostika problémov so zostavami či komponentami.",
      "keywords": "pc, pocitac, servis, kosice, košice, oprava, notebook, zostava, skladanie, rýchlejšie, spoľahlivejšie, tichšie, rýchlejšie spoľahlivejšie tichšie, rst, rstservis, rst.sk, rst servis, rst.sk servis, rst.sk servis košice, rst.sk košice, rst.sk servis pc košice, rst.sk servis",
      "sameAs": [
        "https://www.facebook.com/rstskservis",
        "https://www.instagram.com/rstskservis/",
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+421-948-600-109",
          "contactType": "customer service",
          "areaServed": "SK",
          "availableLanguage": ["Slovak", "English"],
        },
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Popradská 82",
        "addressLocality": "Košice",
        "addressRegion": "Košický",
        "postalCode": "04011",
        "addressCountry": "Slovakia",
      }
    }
    return {
      title: 'RST - Rýchlejšie, spoľahlivejšie, tichšie',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Oprava počítačov a notebookov. Skladanie počítačových zostáv na mieru. Diagnostika problémov so zostavami či komponentami.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'pc, pocitac, servis, kosice, košice, oprava, notebook, zostava, skladanie, rýchlejšie, spoľahlivejšie, tichšie, rýchlejšie spoľahlivejšie tichšie, rst, rstservis, rst.sk, rst servis, rst.sk servis, rst.sk servis košice, rst.sk košice, rst.sk servis pc košice, rst.sk servis',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: structuredData,
        },
      ],
    }
  },
  components: {
    MainPageButton: () => import('@/components/MainPageButton.vue'),
    SpacerComponent: () => import('@/components/SpacerComponent.vue'),
    PartnerComponent: () => import('@/components/PartnerComponent.vue'),
  },
}
</script>

<style>
.main-page-image-background {
  display: flex;
  width: 100vw;
  height: 0;
  padding-top: 69%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-logo-text {
  position: relative; /* Ensure text is positioned relative to the container */
  z-index: 1; /* Ensure text is above the background image */
}

.main-logo-text {
  position: absolute;
  left: 36vw;
  top: 20vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
}

.main-logo-text-element {
  text-shadow: 1px 6px 4px rgba(0, 0, 0, 0.50);
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  /* 7.0625rem */
  letter-spacing: -0.23rem;
  /* margin-top: -2.8125rem; */
  margin: 0;
}

.main-page-buttons {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 2.5rem;
  width: 45rem;
  margin: 0 auto;
}

.partners {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 70%;
  margin: 0 auto;
}

.about-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2rem;
}

.text-container {
  flex: 1;
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
  max-width: 500px;
}

.fb-page {
  width: 350px;
  margin: 0 1rem;
}

.social-icons {
  /* position: absolute; */
  left: 50%;
  /* transform: translateX(-50%); */
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.icon {
  width: 2rem;
  height: 2rem;
}

@media (max-width: 900px) {
  .main-logo-text-element {
    letter-spacing: -0.1rem !important;
  }

  .main-page-buttons {
    width: 90%;
    gap: 3%;
  }

  .about-section {
    flex-direction: column;
  }

  .text-container,
  .fb-page {
    align-items: center;
    text-align: center;
    max-width: 100%;
    margin: 1rem 0;
  }

  .fb-page {
    width: 250px;
  }
}
</style>
