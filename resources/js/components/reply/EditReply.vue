<template>
    <v-container>
        <v-form>
            <vue-simplemde v-model="reply.body" ref="markdownEditor" />

            <v-card-actions>
                <v-btn icon small class="mb-5" @click="saveEdit">
                    <v-icon color="green" >save</v-icon>
                </v-btn>

                <v-btn icon small class="mb-5" @click="cancelEdit">
                    <v-icon color="black" >cancel</v-icon>
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "EditReply",

        props: ['reply'],

        methods: {
            cancelEdit(reply) {
                EventBus.$emit('cancelEditing', reply)
            },

            saveEdit() {
                axios.put(`/api/questions/${this.$route.params.slug}/replies/${this.reply.id}`, {body: this.reply.body})
                    .then(res => this.cancelEdit(this.reply.body))
            }
        }

    }
</script>

<style>

</style>
