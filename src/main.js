import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Message from './Message.vue';
import Home from './Home.vue';
import Users from './Users.vue';

Vue.component('app-message', Message);

Vue.use(VueRouter);

const routes = [
    { path : '/users', component : Users },
    { path : '/', component : Home },
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
