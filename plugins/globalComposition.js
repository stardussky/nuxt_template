import { onGlobalSetup, globalPlugin } from '@nuxtjs/composition-api'

export default function (context, inject) {
    globalPlugin(context, inject)

    onGlobalSetup((props, context) => {

    })
}
