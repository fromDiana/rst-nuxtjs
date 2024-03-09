<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_Skladanie_02.png" text="mainPage.skladaniePC" :page="'pc-kosice'" topMargin="73%"
            :doHoverAnimation="false" class="page-button" />
        <div>
            <b>{{ $t("computerPage.p1") }}</b>
            <p>{{ $t("computerPage.p2") }}</p>
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
                    content: '',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'pc, pocitac, na mieru, kosice, košice, custom zostava, počítač na mieru, zostava, skladanie, ručne skladané, rýchlejšie spoľahlivejšie tichšie, rst, rstservis, rst.sk, rst servis, rst.sk servis, rst.sk servis košice, rst.sk košice, rst.sk servis pc košice, rst.sk servis',
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
