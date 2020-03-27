<template>
    <v-container v-if="question">
            <ShowReply v-for="(reply, index) in question.replies"  :key="reply.id" :reply = reply :index = index>

            </ShowReply>
    </v-container>
</template>

<script>
    import ShowReply from "./ShowReply"

    export default {
        name: "Replies",

        components: {ShowReply},

        props:['question'],

        created() {
            this.listen()
        },

        methods: {
            listen() {
                EventBus.$on('creatingReply', (reply) => {
                    this.question.replies.unshift(reply)
                })

                EventBus.$on('deletingReply', (index) => {
                    axios.delete(`/api/questions/${this.$route.params.slug}/replies/${this.question.replies[index].id}`)
                        .then(res => {
                            this.question.replies.splice(index,1)
                        })
                })
            }
        }
        
    }
</script>

<style>
    
</style>
