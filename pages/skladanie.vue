<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_Skladanie_02.png" text="mainPage.skladaniePC" :page="'pc-kosice'" topMargin="73%"
            :doHoverAnimation="false" class="page-button" />
        <div>
            <h1 class="computerPage custom-h1">{{ $t("computerPage.p1") }}</h1>
            <div class="empty-line"></div>
            <h2 class="computerPage custom-h2">{{ $t("computerPage.p2") }}</h2>
            <p>{{ $t("computerPage.p3") }}</p>
            <p>{{ $t("computerPage.p4") }}</p>
            <p>{{ $t("computerPage.p5") }}</p>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Počítač na mieru',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Zhotovenie počítačov na mieru v Košiciach',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'pocitac na mieru, skladanie pocitaca, tichy pocitac, spolahlivy pocitac, herny pocitac, custom built pc, silent pc, reliable pc, gaming pc',
                },
            ],
            script: [
                {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Zhotovenie počítača na mieru",
                        "provider": {
                            "@type": "Organization",
                            "name": "RST - Rýchlejšie, spoľahlivejšie, tichšie"
                        },
                        "description": "Zhotovenie počítačov na mieru v Košiciach",
                        "keywords": "pocitac na mieru, skladanie pocitaca, tichy pocitac, spolahlivy pocitac, herny pocitac, custom built pc, silent pc, reliable pc, gaming pc",
                        "inLanguage": "sk",
                    })
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

<style>
</style>
