<template>
    <div class="partner-container">
        <img :src="require('@/assets/' + image)" class="partner" alt="PartnerRST"/>
        <div>{{ $t(this.text) }}</div>
        <br/>
        <div style="font-weight: bold;">{{ $t(this.text + 'Referrer') }}</div>
        <div style="font-weight: bold;">{{ $t(this.text + 'Position') }}</div>
        <div class="partner-link"><a :href="formattedPage" target="_blank">{{ page }}</a></div>
    </div>
    
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        // referrer: {
        //     type: String,
        //     required: true,
        // },
        // position: {
        //     type: String,
        //     required: true,
        // },
        page: {
            type: String,
            required: true,
        },
    },
    computed: {
        translatedText() {
            return this.$t(this.text);
        },
        formattedPage() {
            if (!/^https?:\/\//i.test(this.page)) {
                return `https://${this.page}`;
            }
            return this.page;
        },
    },
    name: 'PartnerComponent',
}
</script>

<style>
.partner-container {
    position: relative;
    width: 14rem;
    height: auto;
    text-align: center;
}
.partner {
    width: 100%;
    height: 100%;
}
.partner-link a{
    text-align: center !important;
    color: #f7a4ff;
}
.partner-link a:hover {
    color: white;
}
@media (max-width: 900px) {
    .partner-container {
        width: 18rem;
        margin-bottom: 3rem;
    }
}
</style>
