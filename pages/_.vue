<template>
    <div class="page-end">
        <div class="container">
            <div>
                <Logo />
                <h1 class="page-end__title">
                    {{ $t('message') }}
                </h1>
                <div class="links">
                    <nuxt-link class="button--grey" :to="localePath('/')">
                        BACK
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { } from '@nuxtjs/composition-api'
import page from '@/compositions/page'

export default {
    name: 'PageEnd',
    setup (props, context) {
        page(context)
    },
    head: {},
}
</script>

<style lang='scss'>
.page-end {
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        text-align: center;
    }

    &__title {
        @include typo('display', 1);

        margin-bottom: 20px;
        color: #35495e;
    }
}
</style>
