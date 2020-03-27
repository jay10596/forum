<template>
    <v-container>
        <vue-simplemde v-model="replyForm.body" ref="markdownEditor" />

        <v-btn color="success" type="submit" dark @click="createReply">
            Reply
        </v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "CreateReply",

        data(){
            return {
                replyForm: {
                    body: null,
                },
                errors: {}
            }
        },

        methods:{
            createReply() {
                axios.post(`/api/questions/${this.$route.params.slug}/replies`, this.replyForm)
                    .then(res => {
                        this.replyForm.body = ''
                        EventBus.$emit('creatingReply', res.data.reply)
                        window.scrollTo(0,0)
                    })
                    .catch(error => this.errors = error.response.data.error)
            }
        }

    }
</script>

<style>

</style>
