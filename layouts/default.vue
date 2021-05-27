<template>
    <div :style="globalStyle">
        <Nuxt />
        <LoadingAjax />
        <LoadingDefault />
    </div>
</template>

<script>
import { inject, computed } from '@nuxtjs/composition-api'

export default {
    name: 'DefaultLayout',
    setup () {
        const viewportInfo = inject('viewportInfo')

        const globalStyle = computed(() => {
            const style = {
                '--vh': '1vh',
            }
            if (process.browser) {
                style['--vh'] = `${window.innerHeight / viewportInfo.value.vpHeight}vh`
            }
            return style
        })

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
