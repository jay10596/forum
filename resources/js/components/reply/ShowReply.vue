<template>
    <v-container>
        <v-card class="mx-auto mb-5" max-width="700" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-card-title class="headline mb-1">{{reply.user}}</v-card-title>
                    <v-card-subtitle>said : {{reply.created_at}}</v-card-subtitle>
                    <div v-if="editing">
                        <EditReply :reply = reply></EditReply>
                    </div>

                    <div v-else>
                        <v-card-text v-html="body"></v-card-text>                    
                    
                            <v-card-actions v-if="own">
                            <v-btn icon small class="mb-5" @click="editReply">
                                <v-icon color="green" >edit</v-icon>
                            </v-btn>
                            <v-btn icon small class="ml-5 mb-5" @click="deleteReply">
                                <v-icon color="red">delete</v-icon>
                            </v-btn>
                        </v-card-actions>   
                    </div>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-container>
</template>

<script>
    import md from 'marked'
    import EditReply from "./EditReply"

    export default {
        name: "ShowReply",

        components: {EditReply},

        props:['reply', 'index'],

        data() {
            return {
                own : User.own(this.reply.user_id),
                editing: false
            }
        },

        computed: {
            body() {
                return md.parse(this.reply.body)
            }
        },

        created() {
            this.listen()
        },

        methods: {
            listen() {
                EventBus.$on('cancelEditing', ()=>{
                    this.editing = false
                })
            },

            deleteReply() {
                EventBus.$emit('deletingReply', this.index)
            },

            editReply() {
                this.editing = true
            }
        }
    }
</script>

<style>
    
</style>