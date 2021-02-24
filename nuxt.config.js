export default {
    target: 'server',
    publicRuntimeConfig: {
        APP_TITLE: '',
        APP_TITLE_TEMPLATE: '',
        APP_URL: '',
        APP_API: ''
    },
    privateRuntimeConfig: {},
    router: {
        middleware: 'routerMiddleware'
    },
    serverMiddleware: ['@/server/index'],
    head: {
        title: process.env.APP_TITLE,
        titleTemplate: `%s | ${process.env.APP_TITLE_TEMPLATE}`,
        htmlAttrs: {
            lang: 'zh-TW'
        },
        meta: [
            { name: 'googlebot', content: 'noindex' }, // TODO: 正式上線後刪除
            { name: 'robots', content: 'noindex' }, // TODO: 正式上線後刪除
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    css: [
        '@/style/_main.scss' // global css
    ],
    styleResources: {
        scss: [
            '@/style/mixins/_mixin.scss' // mixin or function only !!!
        ]
    },
    loading: '@/components/Loading',
    plugins: [
        { src: '@/plugins/directives/index', mode: 'client' },
        { src: '@/plugins/prototype/index', mode: 'client' },
        { src: '@/plugins/svgSupportIE', mode: 'client' },
        { src: '@/plugins/i18n' }
    ],
    components: true,
    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        '@nuxtjs/style-resources'
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/svg-sprite',
        'nuxt-rfg-icon',
        'nuxt-i18n'
    ],
    axios: {},
    svgSprite: {
        input: '~/assets/icons'
    },
    i18n: {
        locales: [
            {
                code: 'zh-TW',
                iso: 'zh-TW'
            },
            {
                code: 'en',
                iso: 'en-US'
            }
        ],
        defaultLocale: 'zh-TW',
        routesNameSeparator: '_',
        seo: false
    },
    build: {}
}
