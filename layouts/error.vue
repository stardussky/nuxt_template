<template>
    <div class="container">
        <div>
            <Logo />
            <h1 class="title">
                404 Not Found
            </h1>
            <div class="links">
                <nuxt-link to="/" class="button--green">
                    Back
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Error'
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
