import Vue from 'vue'
import VueRouter from 'vue-router'

import Parallex from'../components/Parallex'
import Login from'../components/login/Login'
import Logout from'../components/login/Logout'
import Signup from'../components/login/Signup'
import Forum from'../components/forum/Forum'
import SingleQuestion from'../components/forum/SingleQuestion'
import AskQuestion from'../components/forum/AskQuestion'
import Category from'../components/category/Category'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Parallex },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup },
    { path: '/forum', component: Forum, name:"Forum" },
    { path: '/questions/:slug', component: SingleQuestion, name:"SingleQuestion" },
    { path: '/askquestion', component: AskQuestion },
    { path: '/category', component: Category }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    hash: false
})

export default router