<template>
    <v-card>
        <v-toolbar color="green" dark>
            <v-toolbar-title >Categories</v-toolbar-title>
        </v-toolbar>
        
        <v-list>
            <v-list-item v-for="category in categories" :key="category.id">
                <v-list-item-content>
                    <v-list-item-title class="ml-5">
                        {{category.name}}<br><br>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

    </v-card>
</template>

<script>
    export default {
        name: "Sidebar",

        data() {
            return {
                categories: {}
            }
        },

        created() {
            axios.get('api/categories')
                .then(res => this.categories = res.data.data)
                .catch(error => error.response.data)
        }
    }
</script>

<style>

</style>
