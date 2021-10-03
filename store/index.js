export const state = () => ({
    isFirstEnter: true,
    loadingConfig: {
        isShow: true,
        waiting: false,
    },
    loadingStack: [new Promise((resolve) => { resolve() })],
})

export const getters = {
    isLoading (state) {
        return !!state.loadingStack.length
    },
}

export const mutations = {
    SET_FIRST_ENTER (state) {
        state.isFirstEnter = false
    },
    CHANGE_LOADING_SHOW (state, payload) {
        state.loadingConfig.isShow = payload
    },
    CHANGE_LOADING_WAITING (state, payload) {
        state.loadingConfig.waiting = payload
    },
    SET_LOADING_STACK (state, payload) {
        state.loadingStack.push(payload)
    },
    DEL_LOADING_STACK (state) {
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
    ADD_LOADING_STACK ({ state, dispatch, commit }, payload) {
        if (payload instanceof Array) {
            const promise = Promise.allSettled(payload.filter(p => p instanceof Promise)).then((results) => {
                results.forEach(({ status, reason }) => {
                    if (status === 'rejected') {
                        console.warn(`Loading Rejected: ${reason}`)
                    }
                })
                return results
            })
            commit('SET_LOADING_STACK', promise)
            return promise
        }
        if (payload instanceof Promise) {
            commit('SET_LOADING_STACK', payload)
            return payload
        }
    },
    WAIT_LOADING ({ state, getters, dispatch, commit }) {
        if (!state.loadingConfig.waiting) {
            commit('CHANGE_LOADING_WAITING', true)
            return Promise.allSettled(state.loadingStack).then((results) => {
                results.forEach(({ status, reason }) => {
                    commit('DEL_LOADING_STACK')
                    if (status === 'rejected') {
                        console.warn(`Loading Rejected: ${reason}`)
                    }
                })
                commit('CHANGE_LOADING_WAITING', false)
                if (getters.isLoading) {
                    dispatch('WAIT_LOADING')
                }
                return results
            })
        }
    },
}
