<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs8>
                <Questions v-for="question in questions" :key="question.path" :question = question>
                        
                </Questions>
            </v-flex>

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
                questions: {}
            }
        },

        created(){
            axios.get('/api/questions')
                .then(res => this.questions = res.data.data)
                .catch(error => console.log(error.response.data))
        }
    }
</script>

<style>

</style>
