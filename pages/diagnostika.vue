<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_Diagnostika.png" text="mainPage.diagnostika" :page="'servis-pc-notebook-kosice'"
            topMargin="82%" class="page-button" :doHoverAnimation="false" />
        <div>
            <h1 class="diagnosticsPage custom-h1">{{ $t("diagnosticsPage.p1") }}</h1>
            <div class="empty-line"></div>
            <h2 class="diagnosticsPage custom-h2">{{ $t("diagnosticsPage.p2") }}</h2>
            <p>{{ $t("diagnosticsPage.p3") }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DiagnosticsPage',
    head() {
        const structuredScript = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Diagnostika počítačov, notebookov a iných zariadení",
            "provider": {
                "@type": "Organization",
                "name": "RST - Rýchlejšie, spoľahlivejšie, tichšie"
            },
            "description": "Diagnostika počítačov, notebookov a iných zariadení",
            "keywords": "diagnostika pocitaca, diagnostika notebooku, prehrievanie pocitaca, prehrievanie notebooku, prehrievanie grafickej karty, prehrievanie procesora, pc problem diagnosis, laptop problem diagnosis, pc overheating, laptop overheating, cpu overheating, gpu overheating",
            "inLanguage": "sk",
        }
        return {
            title: 'Diagnostika',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Diagnostika počítačov, notebookov a iných zariadení',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'diagnostika pocitaca, diagnostika notebooku, prehrievanie pocitaca, prehrievanie notebooku, prehrievanie grafickej karty, prehrievanie procesora, pc problem diagnosis, laptop problem diagnosis, pc overheating, laptop overheating, cpu overheating, gpu overheating',
                },
            ],
            script: [
                {
                    type: 'application/ld+json',
                    json: structuredScript,
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
