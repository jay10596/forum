<template>
    <v-container>
        <v-alert type="error" v-if="errors">
            {{errors.name[0]}}
        </v-alert>
        <v-form @submit.prevent = "submitCategory">
            <v-text-field
            v-model="categoryForm.name"
            type="text"
            label="Category Name"
            required
            ></v-text-field>

            <v-btn color="pink" type="submit" v-if="hasSlug">Update</v-btn>
            <v-btn color="success" type="submit" v-else>Create</v-btn>
        </v-form>

        <br><br>

        <v-card>
            <v-toolbar color="green" dark>
                <v-toolbar-title >Categories</v-toolbar-title>
            </v-toolbar>
            
            <v-list>
                <div v-for="(category, index) in categories" :key="category.id">
                    <v-list-item>
                        <v-card-actions class="ml-5">
                            <v-btn icon small @click="editCategory(index)">
                                <v-icon color="green" >edit</v-icon>
                            </v-btn>
                            <v-btn icon small class="ml-5" @click="deleteCategory(category.slug, index)">
                                <v-icon color="red">delete</v-icon>
                            </v-btn>
                        </v-card-actions>

                        <v-list-item-content>
                            <v-list-item-title class="ml-5">
                                {{category.name}}<br><br>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                     <v-divider></v-divider>
                </div>
            </v-list>  
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "Category",

        data(){
            return {
                categoryForm: {
                    name: null,
                },
                categories: {},
                errors: null,
                hasSlug: null
            }
        },

        created() {
            axios.get('api/categories')
                .then(res => this.categories = res.data.data)
                .catch(error => error.response.data)
        },

        methods:{
            submitCategory() {
                this.hasSlug ? this.updateCategory() : this.createCategory()
            },

            createCategory() {
                axios.post('/api/categories', this.categoryForm)
                    .then(res => {
                        this.categories.unshift(res.data.category)
                        this.categoryForm.name = null
                    })
                    .catch(error => this.errors = error.response.data.errors)
            },

            updateCategory() {
                axios.put(`/api/categories/${this.hasSlug}`, this.categoryForm)
                    .then(res => {
                        this.categories.unshift(res.data)
                        this.categoryForm.name = null
                        this.hasSlug = null
                    })
                    .catch(error => this.errors = error.response.data.error)
            },

            deleteCategory(slug, index) {
                axios.delete(`/api/categories/${slug}`) 
                    .then(res => this.categories.splice(index, 1))
                    .catch(error => console.log(error))
            },

            editCategory(index) {
                this.categoryForm.name = this.categories[index].name
                this.hasSlug = this.categories[index].slug
                this.categories.splice(index, 1)
            }
        }

    }
</script>

<style>

</style>
