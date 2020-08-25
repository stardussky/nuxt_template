<template>
    <div class="container">
        <div>
            <Logo />
            <h1 class="title">
                {{ siteName }}
            </h1>
            <div class="links">
                <nuxt-link to="/about" class="button--green">
                    About
                </nuxt-link>
                <!-- <router-link to="/about" class="button--green">
                    About
                </router-link> -->
                <nuxt-link to="/user" class="button--grey">
                    User
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Home',
    computed: {
        ...mapState(['siteName'])
    }
}
</script>
