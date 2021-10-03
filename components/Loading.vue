<template>
    <transition
        name="loading"
        @afterLeave="loadingDone"
    >
        <div
            v-show="isShow && isLoading"
            v-lock="isShow && isLoading"
            class="loading-default"
        >
            <div class="loading-default__main">
                <div class="loading-default__block" />
            </div>
        </div>
    </transition>
</template>

<script>
import { useStore, computed } from '@nuxtjs/composition-api'

export default {
    name: 'Loading',
    setup (props, context) {
        const store = useStore()

        const isShow = computed(() => store.state.isFirstEnter || store.state.loadingConfig.isShow)
        const isLoading = computed(() => store.getters.isLoading)

        const loadingDone = () => {
            store.commit('SET_FIRST_ENTER')
        }

        return {
            isShow,
            isLoading,
            loadingDone,
        }
    },
}
</script>

<style lang='scss'>
.loading-default {
    @include size(100%);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    > * {
        pointer-events: none;
    }

    &__main {
        @include size(100%);

        position: absolute;
        top: 0;
        left: 0;
    }

    &__block {
        @include size(100%);

        position: absolute;
        top: 0;
        left: 0;
        background-color: map-get($colors, primary);
    }
}
</style>
