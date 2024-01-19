<template>
    <div>
        <div>
            <h1>Posts:</h1>
            <ul>
                <li v-for="post in currentBanner.posts" :key="'posts-' + post.id">
                    Name: {{ post.name }}
                </li>
            </ul>
        </div>
        <div>
            <h1>Cards:</h1>
            <ul>
                <li v-for="card in currentBanner.cards" :key="'cards-' + card.id">
                    Name: {{ card.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "BannerDetailsModalComponent",
    props: {
        currentBanner: Object
    },
    computed: {
        posts: function () {
            return this.currentBanner.posts;
        },
        cards: function () {
            return this.currentBanner.cards;
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
}
</script>