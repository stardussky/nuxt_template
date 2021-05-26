<template>
    <div class="page-about">
        <div>
            <p class="page-about__title">
                {{ localeData.greet }}
            </p>
            <nuxt-link class="button--grey" :to="localePath('/', $i18n.locale)">
                Back
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { useStore, useFetch, onMounted } from '@nuxtjs/composition-api'
import ImagesLoaded from 'imagesloaded'

export default {
    name: 'About',
    middleware: 'loadingMiddleware',
    setup () {
        const store = useStore()

        const { fetch, fetchState } = useFetch(async () => {
            const data = await store.dispatch('AJAX', { url: '/api' })
            console.log(data)
        })

        onMounted(() => {
            store.dispatch('ADD_LOADING_STACK', new Promise((resolve) => {
                new ImagesLoaded('#__nuxt', { background: '[data-background]' }, (instance) => {
                    resolve()
                })
            }))

            store.dispatch('WAIT_LOADING')
        })
    },
    head () {
        const i18nSeo = this.$nuxtI18nSeo({ addSeoAttributes: true })
        const { og } = this.localeData
        return {
            title: og?.title,
            htmlAttrs: {
                ...i18nSeo.htmlAttrs,
            },
            meta: [
                { hid: 'og:title', property: 'og:title', content: og?.title },
                { hid: 'og:site_name', property: 'og:site_name', content: og?.title },
                { hid: 'name', itemprop: 'name', content: og?.title },
                { hid: 'twitter:title', name: 'twitter:title', content: og?.title },
                { hid: 'description', name: 'description', content: og?.desc },
                { hid: 'og:description', property: 'og:description', content: og?.desc },
                { hid: 'twitter:description', name: 'twitter:description', content: og?.desc },
                { hid: 'og:url', property: 'og:url', content: `${process.env.APP_URL}/${this.getRouteBaseName(this.$route)}` },
                { hid: 'og:image', property: 'og:image', content: og?.thumb },
                { hid: 'twitter:image', name: 'twitter:image', content: og?.thumb },
                { hid: 'image', itemprop: 'image', content: og?.thumb },
                ...i18nSeo.meta,
            ],
            link: [
                ...i18nSeo.link,
            ],
        }
    },
    computed: {
        localeData () {
            return this.$t('about')
        },
    },
}
</script>

<style lang="scss">

.page-about {
    display: grid;
    width: 100%;
    height: 100vh;
    place-items: center;

    >div {
        text-align: center;
    }

    &__title {
        @include typo('display', 1);

        display: block;
        text-align: center;
        color: #35495e;
    }
}
</style>
