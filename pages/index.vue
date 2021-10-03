<template>
    <div class="page-index">
        <div class="container">
            <div>
                <client-only>
                    <Logo />
                </client-only>
                <h1 class="page-index__title">
                    Nuxt - {{ $t('lang') }}
                </h1>
                <div class="page-index__links">
                    <a
                        href="https://nuxtjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="button--green"
                    >
                        {{ $t('document') }}
                    </a>
                    <a
                        href="https://github.com/nuxt/nuxt.js"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="button--grey"
                    >
                        GitHub
                    </a>
                </div>
                <div class="page-index__lang">
                    <nuxt-link
                        class="button--grey"
                        :to="switchLocalePath('zh')"
                    >
                        中文
                    </nuxt-link>
                    <nuxt-link
                        class="button--grey"
                        :to="switchLocalePath('en')"
                    >
                        EN
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import page from '@/compositions/page'

export default defineComponent({
    name: 'PageIndex',
    components: {
        Logo: () => process.browser ? import('@/components/Logo.vue') : null,
    },
    setup (props, context) {
        const { root } = context
        page(context)
    },
    head: {},
})
</script>

<style lang='scss'>
.page-index {
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        text-align: center;
    }

    &__title {
        @include typo('display', 1);

        color: #35495e;
    }

    &__links {
        padding-top: 15px;
    }

    &__lang {
        margin-top: 30px;
    }
}
</style>
