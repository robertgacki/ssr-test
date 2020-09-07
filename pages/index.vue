<template>
    <div>
        <h1>Fitatu</h1>
        <NuxtMountains />
    </div>
</template>

<script>
    export default {
        async asyncData({ $http, error }) {
            // try {
            //     return {
            //         posts: await $http.get('https://api.nuxtjs.dev/posts')
            //     }
            // } catch(e) {
            //     error(e);
            // }
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