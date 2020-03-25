<template>
    <v-card
        flat
        height="100px"
        tile
    >
        <v-toolbar>
            <v-toolbar-title>Forum SPA</v-toolbar-title>
            <v-spacer></v-spacer>
            <div>
                <router-link v-for="item in items" :key="item.title" :to="item.to" v-if="item.show">
                    <v-btn >{{item.title}}</v-btn>
                </router-link>
            </div>
        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: "Toolbar",

        created() {
            EventBus.$on('logout', () => {
                User.logout()
            })
        },

        data(){
            return {
                items: [
                    {title: 'Forum', to: '/forum', show: true},
                    {title: 'Ask Question', to: '/askquestion', show: User.loggedIn()},
                    {title: 'Category', to: '/category', show: User.loggedIn()},
                    {title: 'Login', to: '/login', show: !User.loggedIn()},
                    {title: 'Logout', to: '/logout', show: User.loggedIn()},             
                ]
            }
        }
    }
</script>

<style>

</style>