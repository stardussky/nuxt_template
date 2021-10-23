export default ({ app, store, route, error }, inject) => {
    const { nuxt, i18n, localePath } = app

    nuxt.defaultTransition.beforeEnter = () => {
        i18n.finalizePendingLocaleChange()
    }

    i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup, { route }) => {
        setLocaleData(route, newLocale)
    }

    const translateUrl = (route, locale = i18n.defaultLocale) => {
        const { path, query } = route
        const routeBasePath = localePath(path, i18n.defaultLocale)

        let url = `/api/pages${routeBasePath}`

        const params = new URLSearchParams()
        params.append('lang', locale)
        if (query) {
            for (const key in query) {
                const value = query[key]
                params.append(key, value)
            }
        }
        url += `?${params}`

        return { url }
    }

    const setLocaleData = async (route, locale) => {
        locale = locale || i18n.locale
        let { url } = translateUrl(route, locale)
        const messages = store.state.i18n.messages
        const temp = messages[locale]?.[url]

        if (!temp) {
            // server side
            let data
            try {
                if (process.browser) {
                    data = await store.dispatch('ADD_LOADING_STACK', store.dispatch('AJAX', { url }))
                } else {
                    data = await store.dispatch('AJAX', { url })
                }
            } catch (e) {
                let status
                ({ status, data } = e.response)
                url = 'error'
                error({ status, message: data.message || e.message })
                console.warn(`${status} ${data.message || e.message}`)
            } finally {
                for (const { code: locale } of i18n.locales) {
                    i18n.mergeLocaleMessage(locale, data)
                }
                store.commit('i18n/SET_MESSAGE', {
                    locale,
                    key: url,
                    payload: data,
                })
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
