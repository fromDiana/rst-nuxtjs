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
        const structuredScript = {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Naše portfólio",
            "description": "Portfólio prác vykonaných u nás. Zahrňuje opravy, úpravy, údržby notebookov, počítačov a iných zariadení",
            "keywords": "portfolio oprava pocitaca, portfolio oprava notebooku, portfolio prac, portfolio laptop repair, portfolio computer repair",
            "inLanguage": "sk",
        }
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
                    content: 'portfolio oprava pocitaca, portfolio oprava notebooku, portfolio prac, portfolio laptop repair, portfolio computer repair',
                },
            ],
            script: [
                {
                    type: 'application/ld+json',
                    json: structuredScript,
                }
            ]
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
            if (endIndex > 1) {
                endIndex = 17; // Limit 17 posts
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
            let bottomHalfOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - window.innerHeight / 2;
            if (bottomHalfOfWindow) {
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
        console.log(document.documentElement.scrollTop, window.innerHeight, document.documentElement.offsetHeight);
        console.log('Portfolio page mounted');
        this.loadDependencies();
        this.loadPostsData();
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<style scoped>
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
