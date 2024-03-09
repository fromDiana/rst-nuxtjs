<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_PC_Udrzba.png" text="navigationBar.udrzba" :page="'udrzba-pc-kosice'"
            topMargin="73%" :doHoverAnimation="false" class="page-button" />
        <div>
            <p>{{ $t("maintenancePage.p1") }}</p>
            <p>{{ $t("maintenancePage.p2") }}</p>
            <p>{{ $t("maintenancePage.p3") }}</p>
            <p>{{ $t("maintenancePage.p4") }}</p>
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
                    content: 'Komplexná údržba ako nových, tak starších zariadení',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'údržba pc, údržba pocitac, servis, kosice, košice, oprava, notebook, zostava, údržba, profylaxia, prečistenie, prečistenie počítača, prepastovanie, výmena thermalpadov, prečistenie grafickej karty, prepastovanie notebooku, vysoká teplota počítača, vysoká teplota notebooku',
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
