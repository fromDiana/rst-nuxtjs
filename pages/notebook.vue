<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_Notebooky.png" text="navigationBar.notebooky" :page="'notebook-kosice'"
            topMargin="82%" class="page-button" :doHoverAnimation="false" />
        <div>
            <h1 class="laptopPage custom-h1">{{ $t("laptopPage.p1") }}</h1>
            <div class="empty-line"></div>
            <h2 class="laptopPage custom-h2">{{ $t("laptopPage.p2") }}</h2>
            <p>{{ $t("laptopPage.p3") }}</p>
            <p>{{ $t("laptopPage.p4") }}</p>
            <p>{{ $t("laptopPage.p5") }}</p>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        const sctructuredScript = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Notebooky",
            "description": "Nový alebo starý notebook, na všetko sa u nás nájde riešenie",
            "keywords": "oprava laptopu, oprava notebooku, prehrievanie notebooku, hlucny notebook, prach v notebooku, repair laptop, noisy laptop, dusty laptop, cleaning laptop",
            "inLanguage": "sk",
        }
        return {
            title: 'Notebooky',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Nový alebo starý notebook, na všetko sa u nás nájde riešenie',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'oprava laptopu, oprava notebooku, prehrievanie notebooku, hlucny notebook, prach v notebooku, repair laptop, noisy laptop, dusty laptop, cleaning laptop',
                },
            ],
            script: [
                {
                    type: 'application/ld+json',
                    json: sctructuredScript,
                }
            ]
        };
    },
    data() {
        return {
            MainPageButton: null,
        }
    },
    methods: {
        async loadDependencies() {
            const MainPageButtonModule = await import('@/components/MainPageButton.vue');
            this.MainPageButton = MainPageButtonModule.default;
        },
    },
    mounted() {
        this.loadDependencies();
    },
}
</script>

<style></style>
