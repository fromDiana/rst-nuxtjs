<template>
  <div class="language-switcher" @click="toggleLanguage">
    <div class="languages">
      <span class="language" :class="{ active: currentLanguage === 'sk' }">SK</span>
      <span class="language" :class="{ active: currentLanguage === 'en' }">EN</span>
    </div>
    <div class="slider" :class="{ 'slide-right': currentLanguage === 'en' }"></div>
  </div>
</template>

<script>
// import Cookies from 'js-cookie';

export default {
  data() {
    return {
      // Initialize currentLanguage from a cookie, or default to the i18n locale
      // currentLanguage: Cookies.get('userLanguage') || this.$i18n.locale,
      currentLanguage: this.$i18n.locale,
    };
  },
  methods: {
    toggleLanguage() {
      const newLang = this.currentLanguage === 'sk' ? 'en' : 'sk';
      this.setLanguage(newLang);
    },
    setLanguage(newLang) {
      this.$i18n.setLocale(newLang);
      this.currentLanguage = newLang;
      // if (this.$cookies.get('userConsent') === 'accepted'){

      //   Cookies.set('userLanguage', newLang, { expires: 365, sameSite: 'Lax' });
      // }
    },
  },
  mounted() {
    this.setLanguage(this.currentLanguage);
  },
};
</script>
  
<style scoped>
.language-switcher {
  width: 90px;
  height: 30px;
  /* border-radius: 3rem; */
  /* border: 1px solid #FFF !important; */
  /* box-shadow: inset 0 0 0 3px white !important; */
  cursor: pointer;
  overflow: hidden;
  background-image: url("@/assets/T_language_bar.png");
  background-size: cover;
}

.languages {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 1;
}

.language {
  color: white;
  /* font-weight: bold; */
  font-weight: 600;
}

.slider {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0px;
  right: 0px;
  /* background-color: white !important; */
  /* border-radius: 20px; */
  transition: transform 0.3s ease-in-out;
  background-image: url("@/assets/T_language_slider.png");
  background-size: cover;
}

.slider.slide-right {
  transform: translateX(40px);
}

.language.active {
  color: black !important;
}
</style>
  