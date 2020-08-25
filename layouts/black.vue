<template>
    <div class="black-layout">
        <Nuxt />
    </div>
</template>

<script>
export default {
    name: 'LayoutBlack'
}
</script>

<style>
    .black-layout {
        background-color: #000;
        color: #fff;
    }

    .black-layout .title {
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
        color: #09c58e;
        letter-spacing: 1px;
    }
</style>
