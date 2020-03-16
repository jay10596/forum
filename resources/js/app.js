require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import Vuetify from 'vuetify';
import router from './router/router.js';

Vue.use(Vuetify);

Vue.component('home', require('./components/Home.vue').default);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router
});

