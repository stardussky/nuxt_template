const fs = require('fs')
const path = require('path')

const getLocaleData = (page = 'index', lang = process.env.APP_DEFAULT_LANG) => {
    let response
    try {
        const globalData = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../locales/global_${lang}.json`), 'utf8'))
        const pageData = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../locales/${page}_${lang}.json`), 'utf8'))
        response = {
            ...globalData,
            ...pageData,
        }
    } catch (e) {
        throw new Error(e.message)
    }
    return response
}

module.exports = getLocaleData
