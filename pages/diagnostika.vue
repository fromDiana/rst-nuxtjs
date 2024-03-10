<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_Diagnostika.png" text="mainPage.diagnostika" :page="'servis-pc-notebook-kosice'"
            topMargin="82%" class="page-button" :doHoverAnimation="false" />
        <div>
            <p>{{ $t("diagnosticsPage.p1") }}</p>
            <p>{{ $t("diagnosticsPage.p2") }}</p>
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

<style></style>
