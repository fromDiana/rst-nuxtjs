<template>
    <div class="posts">
        <PostComponent v-for="postData in postsData" :key="postData.id" :title="localizedText(postData, 'title')"
            :date="localizedText(postData, 'date')" :description="localizedText(postData, 'description')"
            :imagePath="`post${postData.id}`" />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Portfolio',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Portfólio prác vykonaných u nás. Zahrňuje opravy, úpravy, údržby notebookov, počítačov a iných zariadení',
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
            postsData: [],
            PostComponent: null,
            loadedPostsCount: 10,
        }
    },
    methods: {
        async loadDependencies() {
            const PostComponentModule = await import('@/components/PostComponent.vue');
            this.PostComponent = PostComponentModule.default;
        },
        async loadPostsData() {
            for (let i = 1; i <= this.loadedPostsCount; i++) {
                try {
                    let dataModule = await import(`@/assets/posts/post${i}/data.js`);
                    const postData = {
                        ...dataModule.default,
                        id: i,
                    };
                    this.postsData.push(postData);
                } catch (e) {
                    console.error(`Failed to load data for post${i}:`, e);
                }
            }
        },
        async loadMorePosts() {
            let nextIndex = this.postsData.length + 1;
            let endIndex = nextIndex + 10; // load 10 more posts
            if (endIndex > 15) {
                endIndex = 15; // Limit 15 posts
            }
            for (let i = nextIndex; i < endIndex; i++) {
                try {
                    let dataModule = await import(`@/assets/posts/post${i}/data.js`);
                    const postData = {
                        ...dataModule.default,
                        id: i,
                    };
                    this.postsData.push(postData);
                } catch (e) {
                    console.error(`Failed to load data for post${i}:`, e);
                    break;
                }
            }
        },
        handleScroll() {
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            if (bottomOfWindow) {
                this.loadMorePosts();
            }
        },

        localizedText(postData, field) {
            const currentLocale = this.$i18n.locale;
            if (postData[currentLocale] && postData[currentLocale][field]) {
                return postData[currentLocale][field];
            }
            return postData['sk'][field]; // 'sk' is the default/fallback language
        },
    },
    mounted() {
        this.loadDependencies();
        this.loadPostsData();
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<style>
.posts {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    padding: 3rem;
    box-sizing: border-box;
    margin-top: 7rem;
    width: 100vw;
}
</style>
