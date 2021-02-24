export const state = () => ({
    deviceInfo: null,
    viewPort: {
        width: 0,
        height: 0,
        media: {
            mobile: '(max-width: 767px)',
            tablet: '(max-width: 1199px) and (min-width: 768px)',
            desktop: '(min-width:1200px)'
        }
    }
})

export const getters = {
    deviceMedia (state) {
        if (process.browser) {
            for (const key in state.viewPort.media) {
                if (window.matchMedia(state.viewPort.media[key]).matches) {
                    return key
                }
            }
        }
        return null
    }
}

export const mutations = {
    SET_DEVICE_INFO (state, payload) {
        state.deviceInfo = payload
    },
    SET_VIEWPORT (state, { width, height }) {
        state.viewPort = { ...state.viewPort, width, height }
    }
}

export const actions = {
    async nuxtServerInit () {

    },
    AJAX (context, options) {
        return new Promise((resolve, reject) => {
            this.$axios({
                ...options
            }).then(({ data, ...res }) => {
                resolve(data)
            }).catch((e) => {
                reject(e)
            })
        })
    }
}
