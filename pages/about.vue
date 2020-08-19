<template>
    <div class="container">
        <div>
            <Logo />
            <h1 class="title">
                This is About Page
            </h1>
            <div class="links">
                <nuxt-link to="/" class="button--green">
                    Home
                </nuxt-link>
                <nuxt-link to="/user" class="button--grey">
                    User
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    middleware: 'routerMiddleware',
    fetch () {
        console.log('fetch hook')
    },
    asyncData () {
        console.log('asyncData hook')
        return {

        }
    },
    created () {
        console.log('created hook')
    },
    mounted () {
        console.log('mounted hook')
    }
}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family:
        'Quicksand',
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.links {
    padding-top: 15px;
}
</style>
