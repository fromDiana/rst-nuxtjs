<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_oprava_pocitacov a notebookov.png" text="mainPage.opravaPC"
            :page="'oprava-pc-notebook-kosice'" topMargin="73%" :doHoverAnimation="false" class="page-button" />
        <div>
            <h1 class="repairPage custom-h1">{{ $t("repairPage.p1") }}</h1>
            <div class="empty-line"></div>
            <h2 class="repairPage custom-h2">{{ $t("repairPage.p2") }}</h2>
            <p>{{ $t("repairPage.p3") }}</p>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Oprava počítačov, notebookov a iných zariadení',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Oprava počítačov a notebookov Košice',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'oprava pc, oprava pocitaca, oprava notebooku, servis pc, servis pocitaca, servis notebooku, repair laptop, repair computer',
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
</style>
