<template>
    <div class="container">
        <div>
            <Logo />
            <h1 class="title">
                User
            </h1>
            <div class="links">
                <nuxt-link to="/" class="button--green">
                    Home
                </nuxt-link>
                <nuxt-link to="/about" class="button--green">
                    About
                </nuxt-link>
            </div>
            <div class="user-list">
                <nuxt-link
                    v-for="user in list"
                    :key="user.id"
                    :to="{name: 'user-user', params: {user: user.id}}"
                    class="button--grey"
                >
                    User{{ user.id }}
                </nuxt-link>
            </div>
            <div>
                <button class="button--grey" @click="addAccount">
                    Add Account
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: 'User',
    async fetch ({ store, error }) {
        if (!store.state.user.list.length) {
            try {
                const data = await store.dispatch('GET_API', '/api/user')
                store.commit('user/SET_LIST', data)
            } catch (e) {
                error(e)
            }
        }
    },
    computed: {
        ...mapState('user', ['list'])
    },
    methods: {
        ...mapMutations('user', ['SET_LIST']),
        ...mapActions(['POST_API']),
        async addAccount () {
            const name = prompt('Enter your name.')
            if (name) {
                const result = await this.POST_API(`/api/user/${name}`)
                if (result) {
                    this.SET_LIST(result)
                }
            }
        }
    }
}
</script>

<style>

.user-list {
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.user-list a {
    margin-bottom: 15px;
}

.button--grey {
    margin: 0;
}
</style>
