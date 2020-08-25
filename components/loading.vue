<template>
    <div v-if="isLoading" class="o-loading container">
        <div>
            <Logo />
            <h1 class="title">
                Loading...
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loading',
    data () {
        return {
            isLoading: false
        }
    },
    methods: {
        start () {
            // console.log('loading start')
            this.isLoading = true
        },
        finish () {
            // console.log('loading end')
            this.isLoading = false
        }
    }
}
</script>

<style>
    .o-loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 99;
    }
</style>
