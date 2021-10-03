<template>
    <div class="page-about">
        <div class="container">
            <p class="page-about__title">
                {{ $t('title') }}
            </p>
            <nuxt-link class="button--grey" :to="localePath('/')">
                Back
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { useStore, useFetch } from '@nuxtjs/composition-api'
import page from '@/compositions/page'

export default {
    name: 'About',
    meta: {
        loading: false,
    },
    setup (props, context) {
        page(context)
        const store = useStore()

        const { fetch, fetchState } = useFetch(async () => {
            const data = await store.dispatch('AJAX', { url: '/api' })
            console.log(data)
        })
    },
    head: {},
}
</script>

<style lang="scss">
.page-about {
    display: grid;
    width: 100%;
    height: 100vh;
    place-items: center;

    .container {
        text-align: center;
    }

    &__title {
        @include typo('heading', 1);

        color: #35495e;
        margin-bottom: 20px;
    }
}
</style>
