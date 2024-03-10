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
                    content: 'Skladanie počítačov na mieru Košice',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'pocitac na mieru, skladanie pocitaca, tichy pocitac, spolahlivy pocitac, herny pocitac, custom built pc, silent pc, reliable pc, gaming pc',
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
