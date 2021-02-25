export default async function ({ app, route, ...context }) {
    await app.$getLanguage(route)
}
