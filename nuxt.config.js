export default {
    mode: 'universal',
    target: 'server',
    components: true,
    router: {
        base: '/catalog/'
    },
    modules: ['@nuxt/http'],
    head: {
        title: 'Fitatu the best calories calculator',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'my website description'
            }
        ],
        link: [{ rel: 'icon', type: 'image/png', href: 'favicon.png' }]
    }
}