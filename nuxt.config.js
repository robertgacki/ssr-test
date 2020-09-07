export default {
    mode: 'universal',
    target: 'server',
    components: true,
    router: {
        base: '/catalog/'
    },
    modules: ['@nuxt/http']
}