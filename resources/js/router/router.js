import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from'../components/login/Login'
import Logout from'../components/login/Logout'
import Signup from'../components/login/Signup'
import Forum from'../components/forum/Forum'
import SingleQuestion from'../components/forum/SingleQuestion'
import AskQuestion from'../components/forum/AskQuestion'


Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup },
    { path: '/forum', component: Forum, name:"Forum" },
    { path: '/questions/:slug', component: SingleQuestion, name:"SingleQuestion" },
    { path: '/askquestion', component: AskQuestion }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    hash: false
})

export default router