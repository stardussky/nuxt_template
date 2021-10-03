<template>
    <div :style="globalStyle">
        <Nuxt keep-alive />
        <Header />
        <Loading />
    </div>
</template>

<script>
import layout from '@/compositions/layout'

export default {
    name: 'DefaultLayout',
    setup (props, context) {
        const { globalStyle } = layout(context)

        return {
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
