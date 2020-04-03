<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs8>
                <Questions v-for="question in questions" :key="question.path" :question = question>
                        
                </Questions>
            </v-flex>

            <div class="text-center">
                <v-pagination
                    v-model="pages.current_page"
                    class="my-4"
                    :length="pages.last_page"
                    @input="changePage"
                    >
                </v-pagination>     
            </div>

            <v-flex xs4>
                <Sidebar>
                        
                </Sidebar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Questions from "./Questions"
    import Sidebar from "./Sidebar"

    export default {
        name: "Forum",

        components: {Questions, Sidebar},

        data() {
            return {
                questions: {},
                pages: {}
            }
        },

        created(){
            this.getQuestions()
        },

        methods: {
            getQuestions(page) {
                let url = page ? `api/questions?page=${this.pages.current_page}` : '/api/questions'
                
                axios.get(url)
                    .then(res => {
                        this.questions = res.data.data
                        this.pages = res.data.meta
                    })
                    .catch(error => console.log(error.response.data))
            },

            changePage(page) {
                this.getQuestions(page)
            }
        }
    }
</script>

<style>

</style>
