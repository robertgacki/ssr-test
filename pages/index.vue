<template>
    <div>
        <h1>Fitatu app</h1>
        <p v-for="post in posts">{{post.id}} <NuxtLink :to="`/posts/${post.id}`">{{post.title}}</NuxtLink> {{post.description}}</p>
        <NuxtMountains />
    </div>
</template>

<script>
    export default {
        async asyncData({ $http, error }) {
            try {
                const posts = await $http.$get('https://api.nuxtjs.dev/posts');

                return { posts }
            } catch(e) {
                error(e);
            }
        },

        head() {
            
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
        font-size: 25px;
    }
</style>