const fs = require('fs')
const path = require('path')

const getLocaleData = (page = 'index', lang = process.env.APP_DEFAULT_LANG) => {
    const response = {
        statusCode: 200,
        data: null,
    }
    try {
        const globalData = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../locales/global_${lang}.json`), 'utf8'))
        const pageData = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../locales/${page}_${lang}.json`), 'utf8'))
        response.data = {
            ...globalData,
            ...pageData,
        }
    } catch (e) {
        response.statusCode = 500
        response.error = e.message
    }
    return response
}

module.exports = getLocaleData
