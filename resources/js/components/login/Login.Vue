<template>
    <div>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-select
            v-model="password"
            :items="items"
            label="Password"
            required
            ></v-select>

            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Are you sure?"
            required
            ></v-checkbox>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            type="submit"
            @click="validate"
            >
            Login
            </v-btn>
        </v-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        }
    }
</script>

<style>

</style>