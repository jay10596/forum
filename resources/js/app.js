require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import Vuetify from 'vuetify';
import router from './router/router.js';
import User from './helpers/user.js';
window.User = User

console.log(User.loggedIn())

window.EventBus = new Vue();

Vue.use(Vuetify);

import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'

Vue.component('vue-simplemde', VueSimplemde)

Vue.component('Home', require('./components/Home.vue').default);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router
});

