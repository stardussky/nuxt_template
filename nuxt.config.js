
export default {
    mode: 'universal',
    target: 'server',
    head: {
        title: process.env.npm_package_name || '',
        titleTemplate: '%s | Nuxt',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'og:title', property: 'og:title', content: process.env.npm_package_name || '' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: [
        '@/style/main.css'
    ],
    // loading: {
    //     color: 'red',
    //     height: '1px'
    // },
    loading: '@/components/loading',
    plugins: [
        { src: '@/plugins/myPlugin', mode: 'client' }
    ],
    components: true,
    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module'
    ],
    modules: [
        '@nuxtjs/axios'
    ],
    axios: {},
    serverMiddleware: [
        { path: '/example', handler: '@/server/example' },
        '@/server/api/index'
    ],
    build: {
    }
}
