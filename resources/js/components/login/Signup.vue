<template>
    <div>
        <v-container>
            <v-form @submit.prevent = "signup">
                <v-text-field
                v-model="signupForm.name"
                type="text"
                label="Name"
                required
                ></v-text-field>
                <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>

                <v-text-field
                v-model="signupForm.email"
                type="email"
                label="E-mail"
                required
                ></v-text-field>
                <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>

                <v-text-field
                v-model="signupForm.password"
                type="password"
                label="Password"
                required
                ></v-text-field>
                <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>

                <v-text-field
                v-model="signupForm.password_confirmation"
                type="password"
                label="Confirm Password"
                required
                ></v-text-field>

                <v-btn
                color="success"
                type="submit"
                >
                Signup
                </v-btn>

                <router-link to="/login">
                    <v-btn color="blue">Login</v-btn>
                </router-link>
            </v-form>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {

        name: "Signup",

        data() {
            return {
                signupForm: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null
                },
                errors:{},
            }
        },

        created(){
            if(User.loggedIn())
            {
                this.$router.push({name: 'Forum'})
            }
        },

        methods: {
            signup() {
                User.signup(this.signupForm)
            }
        }
    }
</script>

<style>

</style>