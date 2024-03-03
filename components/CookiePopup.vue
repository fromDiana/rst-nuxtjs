<template>
    <div v-if="showPopup" class="cookie-consent-popup">
      <div class="cookie-consent-content">
        <p>{{ $t("cookies.info") }}
            <NuxtLink to="/privacy-policy"><u>{{$t("cookies.policy")}}</u>.</NuxtLink></p>
        
        <button @click="acceptCookies" class="cookies-button">Accept</button>
        <button @click="rejectCookies" class="cookies-button">Reject</button>
      </div>
    </div>
  </template>

<script>
export default {
    data() {
    return {
      showPopup: false // Default to false
    };
  },
  mounted() {
    this.showPopup = !this.hasConsented();
  },
  // methods: {
  //   hasConsented() {
  //     return !!this.$cookies.get('userConsent');
  //   },
  //   acceptCookies() {
  //     this.$cookies.set('userConsent', 'accepted', { expires: 365, sameSite: 'None' });
  //     this.showPopup = false;
  //   },
  //   rejectCookies() {
  //     this.$cookies.set('userConsent', 'rejected', { expires: 365, sameSite: 'None' });
  //     this.showPopup = false;
  //   }
  // },
};
</script>

<style>
.cookie-consent-popup {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.702);
  z-index: 1000;
}

.cookie-consent-content {
  margin: 10px;
  padding: 10px;
  text-align: center;
}
.cookies-button{
    width: 5.5rem;
    height: 2.1875rem;
    justify-content: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 2px solid #EB00FF;
    background: none;
    color: white;
    cursor: pointer;
    margin: 0 10px;
    transition: all 0.3s ease;
}
.cookies-button:hover {
    border: 2px solid #fac6ff;
}
</style>
