export const state = () => ({
    list: [],
    userId: null
})

export const getters = {
    userInfo (state) {
        return state.list.find(l => l.id === state.userId)
    }
}

export const mutations = {
    SET_LIST (state, payload) {
        state.list = payload
    },
    SET_ID (state, id) {
        state.userId = id
    },
    DELETE_USER (state, id) {
        state.list = state.list.filter(l => l.id !== id)
    }
}
