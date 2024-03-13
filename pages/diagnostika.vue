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
    nme: 'DiagnosticsPage',
    head() {
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
/* Custom styles for H1 and H2 tags */
.custom-h1 {
  font-size: 16px;
}
.custom-h2 {
  font-size: 16px;
  font-weight: normal;
}
/* Custom styles for empty line */
.empty-line {
  height: 10px;
}
</style>
