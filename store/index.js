const LOADING = Object.freeze({
    MIN_LOAD_TIME: 500,
    LOADING_TYPE_DEFAULT: 'default',
    LOADING_TYPE_AJAX: 'ajax',
})

export const state = () => ({
    loadingConfig: {
        minTime: LOADING.MIN_LOAD_TIME,
        type: LOADING.LOADING_TYPE_DEFAULT,
    },
    loadingStack: [new Promise((resolve) => { resolve() })],
})

export const getters = {
    isLoading (state) {
        return !!state.loadingStack.length
    },
}

export const mutations = {
    CHANGE_LOADING_TYPE (state, payload) {
        const type = LOADING[payload]
        if (type && typeof type === 'string') {
            state.loadingConfig.type = type
        }
    },
    SET_LOADING_STACK (state, payload) {
        state.loadingStack.push(payload)
    },
    DEL_LOADING_STACK (state, payload) {
        state.loadingStack.shift()
    },
}

export const actions = {
    async nuxtServerInit ({ dispatch }) {
        await Promise.all([])
    },
    AJAX (context, options) {
        return new Promise((resolve, reject) => {
            this.$axios({
                ...options,
            }).then(({ data, ...res }) => {
                resolve(data)
            }).catch((e) => {
                reject(e)
            })
        })
    },
    ADD_LOADING_STACK ({ state, commit }, payload) {
        if (Array.isArray(payload)) {
            const promise = Promise.all(payload.filter(p => p instanceof Promise))
            commit('SET_LOADING_STACK', promise)
            return promise
        }
        if (payload instanceof Promise) {
            commit('SET_LOADING_STACK', payload)
            return payload
        }
    },
    WAIT_LOADING ({ state, commit }) {
        const startTime = Date.now()
        return Promise.all(state.loadingStack).then((results) => {
            const endTime = Date.now()
            setTimeout(() => {
                results.forEach(result => commit('DEL_LOADING_STACK'))
            }, state.loadingConfig.minTime - (endTime - startTime))
        })
    },
}
