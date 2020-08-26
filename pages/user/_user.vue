<template>
    <div class="container">
        <div v-if="userInfo">
            <Logo />
            <h1 class="title">
                Hi ~ {{ userInfo.name }}
            </h1>
            <div class="links">
                <nuxt-link to="/user" class="button--green">
                    Back
                </nuxt-link>
                <button class="button--red" @click="deleteAccount">
                    Delete Account
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'UserList',
    middleware: ['userMiddleware'],
    computed: {
        ...mapGetters('user', ['userInfo'])
    },
    methods: {
        ...mapActions(['DELETE_API']),
        ...mapMutations('user', ['DELETE_USER']),
        async deleteAccount () {
            if (confirm('Are you sure you want to DELETE account ?')) {
                const result = await this.DELETE_API({ url: `/api/user/${this.userInfo.id}` })
                if (result && !result.status) {
                    this.$router.replace('/user')
                    this.DELETE_USER(result[0].id)
                }
            }
        }
    }
}
</script>
