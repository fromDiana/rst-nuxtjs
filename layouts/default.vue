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
        // CookiePopup: () => import('@/components/CookiePopup.vue'),
        FooterComponent: () => import('@/components/FooterComponent.vue'),
    },
    head() {
        return {
            link: [
                {
                    rel: 'canonical',
                    href: 'https://rst.sk' + this.$route.path,
                },
            ],
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
    -moz-osx-font-smoothing: grayscale;
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