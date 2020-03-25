<template>
    <v-container>
        <v-form @submit.prevent = "askQuestion">
            <v-text-field
            v-model="questionForm.title"
            type="text"
            label="Title"
            required
            ></v-text-field>

            <v-select
                :items="categories"
                item-text="name"
                item-value="id"
                v-model="questionForm.category_id"
                label="Category"
                autocomplete
            ></v-select>

            <vue-simplemde v-model="questionForm.body" ref="markdownEditor" />

            <br><br><br>

            <v-btn
                color="success"
                type="submit"
                >
                Create
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "AskQuestion",

        data(){
            return {
                questionForm: {
                    title: null,
                    body: null,
                    category_id: null
                },
                categories: {},
                errors: {}
            }
        },

        created() {
            axios.get('/api/categories')
                .then(res => this.categories = res.data.data)
        },

        methods:{
            askQuestion() {
                axios.post('/api/questions', this.questionForm)
                    .then(res => this.$router.push(res.data.path))
                    .catch(error => this.errors = error.response.data.error)
            }
        }

    }
</script>

<style>

</style>
