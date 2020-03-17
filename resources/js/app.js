require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import Vuetify from 'vuetify';
import router from './router/router.js';
import User from './helpers/user.js';
window.User = User
console.log(User.id())

Vue.use(Vuetify);

Vue.component('Home', require('./components/Home.vue').default);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router
});

