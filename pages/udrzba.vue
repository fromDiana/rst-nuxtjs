<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_PC_Udrzba.png" text="navigationBar.udrzba" :page="'udrzba-pc-kosice'"
            topMargin="73%" :doHoverAnimation="false" class="page-button" />
        <div>
            <h1 class="maintenancePage custom-h1">{{ $t("maintenancePage.p1") }}</h1>
            <div class="empty-line"></div>
            <h2 class="maintenancePage custom-h2">{{ $t("maintenancePage.p2") }}</h2>
            <p>{{ $t("maintenancePage.p3") }}</p>
            <p>{{ $t("maintenancePage.p4") }}</p>
            <p>{{ $t("maintenancePage.p5") }}</p>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Údržba počítačov a notebookov',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Komplexná údržba starších, ale aj novších zariadení',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'údržba pc, údržba pocitac, profylaxia, prečistenie, prečistenie počítača, prepastovanie, výmena thermalpadov, prečistenie grafickej karty, prepastovanie notebooku, vysoká teplota počítača, vysoká teplota notebooku, pc maintenance, laptop maintenance, laptop cleaning, computer cleaning, repaste laptop, repaste pc, overheating computer, overheating laptop',
                },
            ],
            script: [
                {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Údržba počítačov a notebookov",
                        "provider": {
                            "@type": "Organization",
                            "name": "RST - Rýchlejšie, spoľahlivejšie, tichšie"
                        },
                        "description": "Komplexná údržba starších, ale aj novších zariadení",
                        "keywords": "údržba pc, údržba pocitac, profylaxia, prečistenie, prečistenie počítača, prepastovanie, výmena thermalpadov, prečistenie grafickej karty, prepastovanie notebooku, vysoká teplota počítača, vysoká teplota notebooku, pc maintenance, laptop maintenance, laptop cleaning, computer cleaning, repaste laptop, repaste pc, overheating computer, overheating laptop",
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
