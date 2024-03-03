<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_oprava_pocitacov a notebookov.png" text="mainPage.opravaPC"
            :page="'oprava-pc-notebook-kosice'" topMargin="73%" :doHoverAnimation="false" class="page-button" />
        <div>
            <p>{{ $t("repairPage.p1") }}</p>
            <p>{{ $t("repairPage.p2") }}</p>
            <p>{{ $t("repairPage.p3") }}</p>
        </div>
    </div>
</template>

<script>
import MainPageButton from '@/components/MainPageButton.vue';
export default {
    head() {
        return {
            title: 'Oprava počítačov, notebookov a iných zariadení',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'pc, pocitac, servis, kosice, košice, oprava, notebook, zostava, rýchlejšie, spoľahlivejšie, tichšie, rýchlejšie spoľahlivejšie tichšie, rst, rstservis, rst.sk, rst servis, rst.sk servis, rst.sk servis košice, rst.sk košice, rst.sk servis pc košice, rst.sk servis',
                },
            ],
        };
    },
    components: {
        MainPageButton,
    }
}
</script>

<style></style>
