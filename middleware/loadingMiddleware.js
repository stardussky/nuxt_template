export default function ({ app, store, ...context }) {
    app.router.options.scrollBehavior = async (to, from, savedPosition) => {
        store.dispatch('ADD_LOADING_STACK', new Promise((resolve) => { resolve() }))
        if (to.name !== from.name) {
            await app.i18n.waitForPendingLocaleChange()
        }
        return savedPosition || { x: 0, y: 0 }
    }
}
