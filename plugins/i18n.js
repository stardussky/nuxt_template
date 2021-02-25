
export default ({ app, store, route }, inject) => {
    const getLanguageKey = (route) => {
        const { name, params: _params } = route
        const [params] = Object.values(_params)
        let key = name
        if (params) key += `_${params}`
        return key
    }
    const getLanguage = async (route, language) => {
        const locale = language || app.i18n.locale
        const [params] = Object.values(route.params)
        const key = getLanguageKey(route)

        const temp = store.state.language.lang[key]
        if (!temp) {
            try {
                let url = `/api/lang/${route.name}`
                if (params) url += `/${params}`

                const langMessage = await store.dispatch('AJAX', { url })
                app.i18n.mergeLocaleMessage(locale, { [key]: langMessage })
                store.commit('language/SET_LANG', { name: key, data: langMessage })
            } catch (e) {
                console.error(`${e.name}: ${e.message} (Lang Not Found)`)
            }
            return
        }
        app.i18n.mergeLocaleMessage(locale, { [key]: temp })

        language && app.i18n.setLocale(locale)
    }

    inject('getLanguageKey', getLanguageKey)
    inject('getLanguage', getLanguage)

    return getLanguage(route)
}
