<template>
    <div>
        <v-card>
            <v-card-text>
                <v-btn icon @click="likeIt">
                    <v-icon :color="color">thumb_up</v-icon>
                </v-btn>
                {{count}}
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Like",

        props: ['reply'],
        
        data() {
            return {
                liked: this.reply.liked,
                count: this.reply.like_count
            }
        },

        computed: {
            color() {
                return this.liked ? 'green' : 'gray'
            }
        },

        created() {
            Echo.channel('likeChannel')
                .listen('LikeEvent', (e) => {
                    if(this.reply.id == e.id) {
                        e.type == 1? this.count ++ : this.count --
                    }
                    //console.log(e);
                });
        },

        methods: {
            likeIt() {
                if(User.loggedIn) {
                    this.liked ? this.removeLike() : this.addLike()
                    this.liked = !this.liked
                }
            },

            addLike() {
                axios.post(`/api/${this.reply.id}/like`)
                    .then(res => this.count ++)
            },

            removeLike() {
                axios.delete(`/api/${this.reply.id}/like`)
                    .then(res => this.count --)
            }
        }
    }
</script>

<style>
</style>