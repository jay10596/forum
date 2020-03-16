<template>
    <v-card
        flat
        height="100px"
        tile
    >
        <v-toolbar>
            <v-toolbar-title>Forum SPA</v-toolbar-title>
            <v-spacer></v-spacer>
            <div>
                <router-link to="/home">
                    <v-btn depressed small>Home</v-btn>
                </router-link>
                <router-link to="/category">
                    <v-btn depressed small>Category</v-btn>
                </router-link>
                <router-link to="/askquestion">
                    <v-btn depressed small>Ask Question</v-btn>
                </router-link>
                <router-link to="/login">
                    <v-btn depressed small>Login</v-btn>
                </router-link>
            </div>
        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>