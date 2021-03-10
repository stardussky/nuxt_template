<template>
    <div class="page-index container">
        <div>
            <Logo />
            <h1 class="title">
                Nuxt - {{ localeData.lang }}
            </h1>
            <div class="links">
                <a
                    href="https://nuxtjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="button--green"
                >
                    {{ localeData.doc }}
                </a>
                <a
                    href="https://github.com/nuxt/nuxt.js"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="button--grey"
                >
                    GitHub
                </a>
                <nuxt-link class="button--grey" :to="localePath('/about', $i18n.locale)">
                    {{ localeData.about }}
                </nuxt-link>
            </div>
            <div class="lang">
                <button class="button--grey" @click="$switchLanguage($route, 'zh')">
                    中文
                </button>
                <button class="button--grey" @click="$switchLanguage($route, 'en')">
                    EN
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
    head () {
        const i18nSeo = this.$nuxtI18nSeo({ addSeoAttributes: true })
        return {
            title: 'Home',
            htmlAttrs: {
                ...i18nSeo.htmlAttrs
            },
            meta: [
                ...i18nSeo.meta
            ],
            link: [
                ...i18nSeo.link
            ]
        }
    },
    computed: {
        localeData () {
            return this.$t(this.$getLanguageKey(this.$route))
        }
    }
}
</script>

<style lang='scss'>

.page-index {
    &.container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        text-align: center;
    }

    .title {
        display: block;
        font-size: 100px;
        font-family:
            'Quicksand',
            'Source Sans Pro',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            'Helvetica Neue',
            Arial,
            sans-serif;
        font-weight: 300;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        padding-bottom: 15px;
        font-size: 42px;
        font-weight: 300;
        color: #526488;
        word-spacing: 5px;
    }

    .links {
        padding-top: 15px;
    }

    .lang {
        margin-top: 30px;
    }
}
</style>
