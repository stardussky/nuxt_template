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
    async nuxtServerInit ({ commit }, { app }) {
        const { data } = await app.$axios.get('/api')
        commit('SET_SITE_NAME', data)
    }
}
