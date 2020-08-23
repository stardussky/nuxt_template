export const state = () => ({
    siteName: null
})

export const getters = {

}

export const mutations = {
    SET_SITE_NAME (state, payload) {
        state.siteName = payload
    }
}

export const actions = {
    async nuxtServerInit ({ commit, dispatch }, { error }) {
        console.log('nuxtServerInit')
        try {
            const data = await dispatch('GET_API', '/api')
            commit('SET_SITE_NAME', data)
        } catch (e) {
            error(e)
        }
    },
    GET_API (context, url, options) {
        return new Promise((resolve, reject) => {
            this.$axios.get(url, options).then(({ data }) => {
                resolve(data)
            }).catch(e => reject(e))
        })
    },
    POST_API (context, url, options) {
        return new Promise((resolve, reject) => {
            this.$axios.post(url, options).then(({ data }) => {
                resolve(data)
            }).catch(e => reject(e))
        })
    },
    DELETE_API (context, url, options) {
        return new Promise((resolve, reject) => {
            this.$axios.delete(url, options).then(({ data }) => {
                resolve(data)
            }).catch(e => reject(e))
        })
    }
}
