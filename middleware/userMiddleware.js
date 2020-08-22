export default async function ({ store, route, error }) {
    store.commit('user/SET_ID', route.params.user)
    if (!store.state.user.list.length) {
        try {
            const data = await store.dispatch('GET_API', '/api/user')
            store.commit('user/SET_LIST', data)
        } catch (e) {
            error(e)
            return
        }
    }
    const userInfo = store.getters['user/userInfo']
    if (!userInfo) { error({ statusCode: 404, message: 'Page Not Found' }) }
}
