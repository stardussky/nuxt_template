<template>
    <div class="container">
        <div>
            <Logo />
            <client-only>
                <h1 class="title">
                    This is About Page
                </h1>
            </client-only>
            <div class="links">
                <nuxt-link to="/" class="button--green">
                    Home
                </nuxt-link>
                <nuxt-link to="/user" class="button--grey">
                    User
                </nuxt-link>
            </div>
            <button class="button--red" @click="$sayName('Foo')">
                MyPlugin
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    layout: 'black',
    middleware: 'routerMiddleware',
    validate () {
        console.log('validate')
        return true
    },
    fetch () {
        console.log('fetch hook')
    },
    asyncData () {
        console.log('asyncData hook')
        return {

        }
    },
    beforeCreate () {
        console.log('beforeCreate hook')
    },
    created () {
        console.log('created hook')
    },
    mounted () {
        console.log('mounted hook')
    },
    head () {
        return {
            title: 'About',
            meta: [
                { hid: 'og:title', property: 'og:title', content: 'About' }
            ]
        }
    }
}
</script>
