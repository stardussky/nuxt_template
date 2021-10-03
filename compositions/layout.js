import { ref, computed, onMounted, onBeforeUnmount } from '@nuxtjs/composition-api'
import mobileInnerHeight from '@/plugins/functions/mobileInnerHeight'
let innerHeight
export default (context) => {
    const { root } = context
    const mobileHeight = ref(0)

    const globalStyle = computed(() => {
        const style = {
            '--vh': '1vh',
            '--loading-duration': '0.5s',
        }
        if (process.browser) {
            style['--vh'] = `${window.innerHeight / mobileHeight.value}vh`
        }
        return style
    })

    onMounted(() => {
        innerHeight = mobileInnerHeight()
        mobileHeight.value = innerHeight()

        window.addEventListener('resize', resize)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('resize', resize)
    })

    const resize = () => {
        mobileHeight.value = innerHeight(true)
    }

    return {
        globalStyle,
    }
}
