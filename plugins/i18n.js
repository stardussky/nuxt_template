export default ({ app, store, route, error }, inject) => {
    const { nuxt, i18n, getRouteBaseName } = app

    nuxt.defaultTransition.beforeEnter = () => {
        i18n.finalizePendingLocaleChange()
    }

    i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup, { route }) => {
        setLocaleData(route, newLocale)
    }

    const translateUrl = (route) => {
        let routeName = getRouteBaseName(route)
        const { params, query } = route
        let url = `/api/pages/${routeName}`
        let paramsPrefix = ''
        let queryPrefix = ''

        const paramsEntries = Object.entries(params)
        if (paramsEntries.length) {
            let [[key, value]] = paramsEntries
            value = encodeURIComponent(decodeURIComponent(value))
            url += `/${value}`
            paramsPrefix += `_${key}${value}`
        }

        const queryEntries = Object.entries(query)
        if (queryEntries.length) {
            url += '?'
            queryPrefix += '_'
            queryEntries.forEach(([key, value]) => {
                value = encodeURIComponent(decodeURIComponent(value))
                url += `${key}=${value}&`
                queryPrefix += `${key}${value}`
            })
        }

        routeName += paramsPrefix + queryPrefix

        return { url, routeName, paramsPrefix, queryPrefix }
    }

    const setLocaleData = async (route, locale) => {
        locale = locale || i18n.locale
        let { url, routeName } = translateUrl(route)
        const messages = store.state.i18n.messages
        const temp = messages[locale]?.[routeName]

        if (!temp) {
            // server side
            url += ~url.indexOf('?') ? `lang=${locale}` : `?lang=${locale}`
            const { statusCode, data, ...res } = await store.dispatch('AJAX', { url })
            if (statusCode === 200) {
                for (const { code: locale } of i18n.locales) {
                    i18n.mergeLocaleMessage(locale, data)
                }
                store.commit('i18n/SET_MESSAGE', {
                    locale,
                    key: routeName,
                    payload: data,
                })
                // console.log(i18n.getLocaleMessage(i18n.locale))
            } else {
                // error({ statusCode, message: res.error })
                console.warn(res.error)
            }
            return
        }
        // client side
        for (const { code: locale } of i18n.locales) {
            i18n.mergeLocaleMessage(locale, temp)
        }
    }

    // client side
    if (process.browser) {
        setLocaleData(route)
    }

    inject('translateUrl', translateUrl)
    inject('setLocaleData', setLocaleData)
}
