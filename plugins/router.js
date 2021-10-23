export default function ({ app, route, store, ...context }) {
    app.router.options.scrollBehavior = async (to, from, savedPosition) => {
        if (!to.hash) {
            store.dispatch('ADD_LOADING_STACK', new Promise((resolve) => { resolve() }))
            if (to.name !== from.name) {
                await app.i18n.waitForPendingLocaleChange()
            }
        }
        return savedPosition || { x: 0, y: 0 }
    }

    app.router.beforeEach((to, from, next) => {
        store.commit('CHANGE_LOADING_SHOW', typeof to.meta.loading === 'function' ? to.meta.loading(to, from) : to.meta.loading !== false)
        next()
    })
}
