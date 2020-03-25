<template>
    <v-card
        class="mx-auto mb-5"
        max-width="700"
        outlined
    >
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                    <router-link :to="question.path"> 
                        {{question.title}}
                    </router-link>
                </v-list-item-title>
                <v-list-item-title class=" mb-5 mt-4">{{question.body}}</v-list-item-title>
                <v-list-item-subtitle>{{question.user}} : {{question.created_at}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-card-text>
            <v-btn text>Like</v-btn>
            <v-btn text>Dislike</v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Questions",

        props:['question'],
    }
</script>

<style>

</style>
