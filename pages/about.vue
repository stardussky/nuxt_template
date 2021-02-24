<template>
    <div class="page-about">
        <div>
            <p class="page-about__title">
                {{ $t($route.name).greet }}
            </p>
            <nuxt-link class="button--grey" :to="localePath('/', $i18n.locale)">
                Back
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'About',
    async fetch () {
        const data = await this.AJAX({ url: '/api' })
        console.log(data)
    },
    head () {
        const i18nSeo = this.$nuxtI18nSeo()
        return {
            title: 'About',
            ...i18nSeo
        }
    },
    methods: {
        ...mapActions(['AJAX'])
    }
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
