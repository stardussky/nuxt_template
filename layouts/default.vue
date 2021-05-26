<template>
    <div :style="globalStyle">
        <Nuxt />
        <LoadingAjax />
        <LoadingDefault />
    </div>
</template>

<script>
import { ref, provide, computed, onBeforeUnmount } from '@nuxtjs/composition-api'
import viewport from '@/plugins/functions/viewport'

export default {
    name: 'DefaultLayout',
    setup () {
        const vp = ref(viewport)

        const viewportInfo = computed(() => vp.value.info)
        const globalStyle = computed(() => {
            const style = {
                '--vh': '1vh',
            }
            if (process.browser) {
                style['--vh'] = `${window.innerHeight / viewportInfo.value.vpHeight}vh`
            }
            return style
        })

        onBeforeUnmount(() => {
            vp.value.destroy()
        })

        provide('viewportInfo', viewportInfo)

        return {
            viewportInfo,
            globalStyle,
        }
    },
}
</script>

<style lang='scss'>

.button--green {
    display: inline-block;
    padding: 10px 30px;
    text-decoration: none;
    color: #3b8070;
    border: 1px solid #3b8070;
    border-radius: 4px;
}

.button--green:hover {
    color: #ffffff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    margin-left: 15px;
    padding: 10px 30px;
    text-decoration: none;
    color: #35495e;
    border: 1px solid #35495e;
    border-radius: 4px;
}

.button--grey:hover {
    color: #ffffff;
    background-color: #35495e;
}
</style>
