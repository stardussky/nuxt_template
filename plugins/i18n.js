export default ({ app, store, route }, inject) => {
    const getLang = async (routeName, lang) => {
        const LANG = lang || app.i18n.locale || 'zh-TW'
        const PATH = routeName || route.name
        if (!app.i18n.getLocaleMessage(LANG)[PATH]) {
            try {
                const langMessage = await store.dispatch('AJAX', { url: `/api/lang/${PATH}` })
                app.i18n.mergeLocaleMessage(LANG, { [PATH]: langMessage })
            } catch (e) {
                console.error(`${e.name}: ${e.message} (Lang Not Found)`)
            }
        }
        lang && app.i18n.setLocale(LANG)
    }
    inject('getLang', getLang)
    return getLang()
}
