
export default ({ app, store, route, error }, inject) => {
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
            let url = `/api/lang/${route.name}`
            if (params) url += `/${params}`

            const { status, data } = await store.dispatch('AJAX', { url })
            if (status === 200) {
                app.i18n.mergeLocaleMessage(locale, { [key]: data })
                store.commit('language/SET_LANG', { name: key, data })
            } else {
                error({ statusCode: status, message: data.message })
                console.error(`${status} ${data.message}`)
            }
            return
        }
        app.i18n.mergeLocaleMessage(locale, { [key]: temp })

        language && app.i18n.setLocale(locale)
    }
    const switchLanguage = (route, lang1, lang2) => {
        let locale = lang1
        if (lang2) {
            locale = app.i18n.locale === lang1 ? lang2 : lang1
        }
        getLanguage(route, locale)
    }

    inject('getLanguageKey', getLanguageKey)
    inject('getLanguage', getLanguage)
    inject('switchLanguage', switchLanguage)

    return getLanguage(route)
}
