<template>
    <div :style="globalStyle">
        <Nuxt />
    </div>
</template>

<script>
import { debounce } from 'lodash'
import { mapMutations } from 'vuex'

export default {
    name: 'DefaultLayout',
    computed: {
        globalStyle () {
            const style = {
                '--vh': '1vh'
            }
            if (process.browser) {
                style['--vh'] = `${window.innerHeight / this.$innerHeight()}vh`
            }
            return style
        }
    },
    mounted () {
        this.resize()
        window.addEventListener('resize', this.resize)
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.resize)
    },
    methods: {
        ...mapMutations(['SET_DEVICE_INFO', 'SET_VIEWPORT']),
        resize: debounce(function () {
            this.SET_VIEWPORT({ width: window.innerWidth, height: this.$innerHeight() })
            this.SET_DEVICE_INFO(this.$detectDevice())
        }, 200)
    }
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
