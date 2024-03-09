<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_Notebooky.png" text="navigationBar.notebooky" :page="'notebook-kosice'"
            topMargin="82%" class="page-button" :doHoverAnimation="false" />
        <div>
            <p>{{ $t("laptopPage.p1") }}</p>
            <p>{{ $t("laptopPage.p2") }}</p>
            <p>{{ $t("laptopPage.p3") }}</p>
            <p>{{ $t("laptopPage.p4") }}</p>
        </div>
    </div>
</template>

<script>
export default {
    head() {
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
                    content: 'servis, kosice, košice, oprava, notebook, oprava laptopu, oprava notebooku',
                },
            ],
        };
    },
    path: 'notebook-kosice',
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
