export default async function ({ app, route, ...context }) {
    await app.$getLang(route.name)
}
