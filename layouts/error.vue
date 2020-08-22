<template>
    <div class="container">
        <div>
            <Logo />
            <h1 class="title">
                {{ error.statusCode }} {{ error.message }}
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
    name: 'Error',
    props: {
        error: {
            type: Object,
            required: true
        }
    }
}
</script>
