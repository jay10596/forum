<template>
    <v-card
        flat
        height="100px"
        tile
    >
        <v-toolbar>
            <v-toolbar-title>Forum SPA</v-toolbar-title>
            <v-spacer></v-spacer>

            <Notifications v-if="loggedIn"></Notifications>
            
            <div>
                <router-link v-for="item in items" :key="item.title" :to="item.to">
                    &ensp; <v-btn  v-if="item.show">{{item.title}}</v-btn> 
                </router-link>
            </div>
        </v-toolbar>
    </v-card>
</template>

<script>
    import Notifications from'./Notifications'

    export default {
        name: "Toolbar",

        components: {Notifications},

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
                    {title: 'Category', to: '/category', show: User.admin()},
                    {title: 'Login', to: '/login', show: !User.loggedIn()},
                    {title: 'Logout', to: '/logout', show: User.loggedIn()},             
                ],

                loggedIn: User.loggedIn()
            }
        }
    }
</script>

<style>
    a {  text-decoration: none;}
</style>