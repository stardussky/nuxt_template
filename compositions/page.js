import { useMeta, useStore, onMounted, onActivated } from '@nuxtjs/composition-api'
import functions from '@/compositions/functions'

export default (context) => {
    const { root } = context
    const store = useStore()
    const { loadImage } = functions()

    useMeta(() => {
        const i18nHead = root.$nuxtI18nHead({ addSeoAttributes: true })

        return {
            // title: seo?.title,
            // titleTemplate: seo?.titleTemplate,
            htmlAttrs: {
                ...i18nHead.htmlAttrs,
            },
            meta: [
                ...i18nHead.meta,
                // { hid: 'og:title', property: 'og:title', content: seo?.title },
                // { hid: 'og:site_name', property: 'og:site_name', content: seo?.title },
                // { hid: 'name', itemprop: 'name', content: seo?.title },
                // { hid: 'twitter:title', name: 'twitter:title', content: seo?.title },
                // { hid: 'description', name: 'description', content: seo?.desc },
                // { hid: 'og:locale', property: 'og:locale', content: seo?.lang },
                // { hid: 'og:description', property: 'og:description', content: seo?.desc },
                // { hid: 'twitter:description', name: 'twitter:description', content: seo?.desc },
                // // { hid: 'og:url', property: 'og:url', content: `${process.env.APP_URL}/${this.getRouteBaseName(this.$route)}` },
                // { hid: 'og:image', property: 'og:image', content: seo?.thumbnail },
                // { hid: 'twitter:image', name: 'twitter:image', content: seo?.thumbnail },
                // { hid: 'image', itemprop: 'image', content: seo?.thumbnail },
            ],
            link: [
                ...i18nHead.link,
            ],
        }
    })

    onMounted(() => {
        store.dispatch('ADD_LOADING_STACK', [
            loadImage(),
        ])

        root.$nextTick(() => {
            store.dispatch('WAIT_LOADING')
        })
    })
    onActivated(() => {
        store.dispatch('ADD_LOADING_STACK', [
            loadImage(),
        ])

        root.$nextTick(() => {
            store.dispatch('WAIT_LOADING')
        })
    })
}
