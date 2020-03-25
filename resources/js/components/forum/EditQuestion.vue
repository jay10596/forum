<template>
    <v-container>
        <v-form @submit.prevent = "saveEdit">
            <v-text-field
            v-model="editForm.title"
            type="text"
            label="Title"
            required
            ></v-text-field>

            <vue-simplemde v-model="editForm.body" ref="markdownEditor" />

            <v-card-actions>
                <v-btn icon small class="mb-5" type="submit">
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
        name: "EditQuestion",

        props: ['question'],

        data(){
            return {
                editForm: {
                    title: null,
                    body: null,
                },
            }
        },

        mounted() {
            this.editForm = this.question
        },

        methods: {
            cancelEdit() {
                EventBus.$emit('cancelEditing')
            },

            saveEdit() {
                axios.put(`/api/questions/${this.$route.params.slug}`, this.editForm)
                    .then(res => this.cancelEdit())
                    .catch(error => console.log(error))
            }
        }

    }
</script>

<style>

</style>
