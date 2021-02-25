export const state = () => ({
    lang: {}
})

export const mutations = {
    SET_LANG (state, { name, data }) {
        state.lang[name] = data
    }
}
