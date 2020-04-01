<template>
    <div>
        <div v-if="editing">
            <EditQuestion :question = question></EditQuestion>
        </div>

        <div v-else>
            <ShowQuestion :question = question v-if="question"></ShowQuestion>
        </div>

        <CreateReply v-if="loggedIn"></CreateReply>

        <router-link v-else to="/login" >
            <v-btn class="ml-5" color="green" dark>Login to reply</v-btn> 
        </router-link>
        
        <Replies :question = question></Replies>
    </div>
</template>

<script>
    import ShowQuestion from "./ShowQuestion"
    import EditQuestion from "./EditQuestion"
    import Replies from "../reply/Replies"
    import CreateReply from "../reply/CreateReply"

    export default {
        name: "SingleQuestion",

        components: {ShowQuestion, EditQuestion, Replies, CreateReply},

        data(){
            return {
                question: null,
                editing: false
            }
        },

        computed: {
            loggedIn() {
                return User.loggedIn()
            }
        },

        created(){
            this.listen()
            this.getQuestion()
        },

        methods: {
            listen() {
                EventBus.$on('startEditing', () => {
                    this.editing = true
                }),

                EventBus.$on('cancelEditing', () => {
                    this.editing = false
                })
            },

            getQuestion() {
                axios.get(`/api/questions/${this.$route.params.slug}`)
                    .then(res => this.question = res.data.data)
                    .catch(error => console.log(error.response.data))
            }
        }

    }
</script>

<style>

</style>
