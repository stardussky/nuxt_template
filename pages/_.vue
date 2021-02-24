<template>
    <div class="page-end container">
        <div>
            <Logo />
            <h1 class="title">
                {{ $t($route.name).message }}
            </h1>
            <div class="links">
                <nuxt-link class="button--grey" :to="localePath('/', $i18n.locale)">
                    BACK
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageEnd'
}
</script>

<style lang='scss'>

.page-end {
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
}
</style>
