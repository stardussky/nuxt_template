export default function ({ app, store, ...context }) {
    store.dispatch('ADD_LOADING_STACK', new Promise((resolve) => { resolve() }))
}
