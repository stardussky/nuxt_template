<template>
    <div class="header">
        <div class="header__logo">
            <img src="@/assets/icons/logo.svg" alt="logo" width="60">
        </div>
        <nav class="header__nav">
            <ul class="header__nav-main">
                <li>
                    <nuxt-link :to="localePath('/about', $i18n.locale)">
                        {{ localeData.about }}
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'Header',
    setup (props, context) {
    },
    computed: {
        localeData () {
            return this.$t('index')
        },
    },
}
</script>

<style lang="scss">

.header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    width: 100%;
    background-color: map-get($colors, white);

    &__nav {
        &-main {
            display: flex;
            align-items: center;
        }

        &-link {
            padding: 0 10px;
        }
    }
}
</style>
