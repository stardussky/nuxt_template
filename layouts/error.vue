<template>
    <div class="page-error">
        <div class="container">
            <div>
                <p class="page-error__title">
                    {{ error.status + ' ' + error.message }}
                </p>
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
import { defineComponent } from '@nuxtjs/composition-api'
import page from '@/compositions/page'

export default defineComponent({
    name: 'Error',
    props: {
        error: {
            type: Object,
            required: true,
        },
    },
    setup (props, context) {
        const { root } = context
        page(context)
    },
    head: {},
})
</script>

<style lang='scss'>
.page-error {
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
