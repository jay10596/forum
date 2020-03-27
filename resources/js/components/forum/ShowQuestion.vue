<template>
    <v-card
        class="mx-auto mb-5"
        outlined
    >
        <v-list-item three-line>
            <v-list-item-content>
                <v-card-title class="headline mb-1">{{question.title}}</v-card-title>
                <v-card-subtitle>{{question.user}} : {{question.created_at}}</v-card-subtitle>
                <v-card-text class=" mb-5 mt-4"  v-html="body"></v-card-text>
            </v-list-item-content>
        </v-list-item>

        <v-card-actions class="ml-5" v-if="own">
            <v-btn icon small class="mb-5" @click="editQuestion">
                <v-icon color="green" >edit</v-icon>
            </v-btn>
            <v-btn icon small class="ml-5 mb-5" @click="deleteQuestion">
                <v-icon color="red">delete</v-icon>
            </v-btn>
        </v-card-actions>

        <v-spacer></v-spacer>
        
        <v-btn color="green" class="ml-5 mb-5" dark>{{question.replies_count}} Replies</v-btn>
    </v-card>
</template>

<script>
    import md from 'marked'

    export default {
        name: "ShowQuestion",

        props:['question'],

        data() {
            return {
                own : User.own(this.question.id)
            }
        },

        computed: {
            body() {
                return md.parse(this.question.body)
            }
        },

        methods: {
            deleteQuestion() {
                axios.delete(`/api/questions/${this.$route.params.slug}`)
                    .then(res => this.$router.push('/forum'))
                    .catch(error => console.log(error))
            },

            editQuestion() {
                EventBus.$emit('startEditing')
            }
        }
    }
</script>

<style>
    
</style>
