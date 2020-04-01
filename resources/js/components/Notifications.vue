<template>
    <div class="text-center">
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon :color="color">add_alert</v-icon>
                </v-btn>
                {{unreadCount}}
            </template>

            <v-list>
                <v-list-item v-for="item in unread" :key="item.id">
                    <router-link :to="item.path">
                        <v-list-item-title @click="markRead(item)">{{item.question}}</v-list-item-title>
                    </router-link>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-item v-for="item in read" :key="item.id">
                    {{item.question}}
                </v-list-item>
            </v-list>

        </v-menu>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Notifications",

        data() {
            return {
                read: {},
                unread: {},
                unreadCount: 0
            }
        },

        computed: {
            color() {
                return this.unreadCount > 0 ? 'red' : 'gray';
            }
        },

        created() {
            if(User.loggedIn()) {
                this.getNotifications()
            }

            Echo.private('App.User.' + User.id())
                .notification((notification) => {
                    this.unread.unshift(notification)
                    this.unreadCount ++
                    //console.log(notification.type)
                });
        },

        methods: {
            getNotifications() {
                axios.post('/api/notifications')
                    .then(res => {
                        this.read = res.data.read
                        this.unread = res.data.unread
                        this.unreadCount = res.data.unread.length
                    })
                    .catch(error => Exception.handle(error))
            },

            markRead(notification) {
                axios.post('/api/markasread', {id: notification.id})
                    .then(res => {
                        this.unread.splice(notification, 1)
                        this.read.push(notification)
                        this.unreadCount --
                    })
            }
        }
    }
</script>

<style>

</style>