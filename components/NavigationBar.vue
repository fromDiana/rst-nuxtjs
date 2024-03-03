<template>
    <header class="header">
        <NuxtLink to="/" class="image-wrapper">
            <img class="main-logo default-logo" :src="defaultImgSrc" alt="RST" />
            <img class="main-logo hover-logo" :src="hoverImgSrc" @mouseover="hover = true"
                @mouseleave="hover = false" />
        </NuxtLink>

        <LanguageSwitcher class="lang-switcher" />

        <div :class="isNavigationVisible ? 'navigation navigation-visible' : 'navigation'"
            :style="{ 'transition': 'max-height ' + animationSpeed + ' ease-out' }">

            <NuxtLink to="/#services" @click="closeNavigation" class="navigation-text-element">
                {{ $t('navigationBar.sluzby') }}</NuxtLink>

            <NuxtLink to="/#references" @click="closeNavigation" class="navigation-text-element">
                {{ $t('navigationBar.referencie') }}</NuxtLink>

            <NuxtLink to="/portfolio-pc-servis-kosice" @click="closeNavigation" class="navigation-text-element">
                {{ $t('navigationBar.portfolio') }}</NuxtLink>

            <NuxtLink to="/#about" @click="closeNavigation" class="navigation-text-element">
                {{ $t('navigationBar.oMne') }}</NuxtLink>
        </div>

        <div class="overlay" v-show="isNavigationVisible" @click="closeNavigation"></div>
        <img @click="toggleNavigation" :src="isNavigationVisible ? closeButtonUrl : hamburgerMenuUrl"
            class="hamburger-menu" />
    </header>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
    name: 'NavigationBar',
    components: {
        LanguageSwitcher,
    },
    data() {
        return {
            isNavigationVisible: false,
            hamburgerMenuUrl: require('@/assets/hamburger_menu.png'),
            closeButtonUrl: require('@/assets/close_button.png'),
            animationSpeed: '0.6s',
            // Import and assign images directly
            defaultImgSrc: require('@/assets/T_RST_LOGO_07.png'),
            hoverImgSrc: require('@/assets/T_RST_LOGO_06.png'),
            currentImgSrc: '', // Will be set on component mount
        };
    },
    mounted() {
        this.checkWindowSize();
        window.addEventListener('resize', this.checkWindowSize);
        this.$el.style.setProperty('--animation-speed', this.animationSpeed);
        this.currentImgSrc = this.defaultImgSrc;
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkWindowSize);
    },
    methods: {
        checkWindowSize() {
            this.isNavigationVisible = window.innerWidth > 900;
        },
        toggleNavigation() {
            // Prevent toggling in desktop view
            if (window.innerWidth <= 900) {
                this.isNavigationVisible = !this.isNavigationVisible;
            }
        },
        closeNavigation() {
            this.isNavigationVisible = false;
        }
    },
}
</script>

<style>
.header {
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4rem;
}

.image-wrapper {
    position: relative;
}

.main-logo {
    position: absolute;
    top: -50px;
    left: 4rem;
    width: 7rem;
    transition: opacity 0.3s ease;
}

.hover-logo {
    opacity: 0;
    /* Make the hover image fully transparent by default */
}

.image-wrapper:hover .hover-logo {
    opacity: 1;
    /* Make the hover image fully opaque on hover */
}

.main-logo:hover {
    animation: all 0.3s ease;
}

.navigation {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 2.3rem;
    margin-top: 1rem;
    margin-right: 5rem;
    z-index: 1001;
}

.navigation-text-element {
    color: #FFF;
    text-shadow: 1px 6px 4px rgba(0, 0, 0, 0.50);
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
}

.lang-switcher {
    position: absolute;
    right: 4.5rem;
    top: 2rem;
    z-index: 1001;
}

.mobile-menu {
    display: none;
    max-height: 0;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.893);
    z-index: 999;
}

@media (max-width: 900px) {
    .hamburger-menu {
        position: absolute;
        right: 2rem;
        top: 2.5rem;
        z-index: 1001;
        cursor: pointer;
    }

    .navigation {
        flex-direction: column;
        gap: 1.5rem;
        position: absolute;
        width: 100%;
        left: 0;
        top: 5rem;
        background-color: rgba(235, 0, 255, 0.16);
        overflow: hidden;
        max-height: 0;
    }

    .navigation-visible {
        max-height: 800px;
    }

    .header {
        display: block;
    }

    .lang-switcher {
        right: 5rem;
        top: 2.4rem;
    }

    .header {
        padding-top: 1.4rem;
    }

    .main-logo {
        top: 1.5rem;
        left: 2rem;
        width: 4rem;
    }
}

@media (min-width: 901px) {
    .overlay {
        display: none;
    }

    .navigation {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 2.3rem;
        margin-right: 5rem;
        z-index: 1001;
    }

    .hamburger-menu {
        display: none;
    }
}
</style>