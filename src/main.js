import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import "bootstrap";


Vue.use(VueRouter)
export const eventBus = new Vue();
const router = new VueRouter({
    mode: 'history',
    routes: Routes
})


new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})