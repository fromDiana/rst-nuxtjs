<template>
  <div class="main-page-button" @mouseover="hover = true" @mouseleave="hover = false" @click="navigate">
    <img :src="require('@/assets/' + imageSrc)" class="main-page-button-image" alt="sluzbyPCServis">
    <img v-if="doHoverAnimation" :src="require('@/assets/T_Hover.png')" class="main-page-button-hover">
    <div class="main-page-button-text" :style="textStyle">{{ translatedText }}</div>
  </div>
</template>  
  
<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
    topMargin: {
      type: String,
      required: false,
      default: "22rem",
    },
    topMarginMobile: {
      type: String,
      required: false,
      default: "80%",
    },
    doHoverAnimation: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  data() {
    return {
      hover: false,
      windowWidth: process.client ? window.innerWidth : 0, // Adjusted line
    };
  },
  computed: {
    translatedText() {
      return this.$t(this.text);
    },
    textStyle() {
      const isMobile = this.windowWidth <= 900;
      return {
        top: isMobile ? this.topMarginMobile : this.topMargin,
      };
    }
  },
  mounted() {
    this.handleResize(); // Call immediately to set initial value
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    navigate() {
      if (!this.page) {
        return;
      }
      this.$router.push(this.page);
    },
    handleResize() {
      this.windowWidth = window.innerWidth; // Update the window width on resize
    }
  },
}
</script>
  
<style scoped>
.main-page-button {
  width: 30%;
  position: relative;
  display: inline-block;
}

.main-page-button-image,
.main-page-button-hover {
  width: 100%;
  display: block;
}

.main-page-button-hover {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
  /* Masking */
  -webkit-mask-image: url('../assets/T_PC_Udrzba.png');
  mask-image: url('../assets/T_PC_Udrzba.png');
  mask-size: cover;
}

.main-page-button:hover .main-page-button-hover {
  opacity: 1;
  cursor: pointer;
}

.main-page-button-text {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 10.3125rem;
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 150%;
  /* letter-spacing: -5%; */
  cursor: pointer;
}

@media (max-width: 900px) {
  .main-page-button-text {
    top: 70%;
    font-size: calc(5px + 2vw);
    line-height: 130%;
    width: 80%;
  }
}
</style>
  