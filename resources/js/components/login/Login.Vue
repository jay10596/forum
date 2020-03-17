<template>
    <div>
        <v-container>
            <v-form @submit.prevent = "login">
                <v-text-field
                v-model="loginForm.email"
                type="email"
                label="E-mail"
                required
                ></v-text-field>

                <v-text-field
                v-model="loginForm.password"
                type="password"
                label="Password"
                required
                ></v-text-field>

                <v-btn
                color="success"
                type="submit"
                >
                Login
                </v-btn>
            </v-form>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {

        name: "Login",

        data() {
            return {
                loginForm: {
                    email: null,
                    password: null
                }
            }
        },

        methods: {
            login() {
                User.login(this.loginForm)
            }
        }
    }
</script>

<style>

</style>