// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import DetailTopic from './components/Detail_Topic.vue'
import category from './components/Category.vue'
/* eslint-disable no-new */
Vue.use(VueRouter)
// const Home= { template: '<div>foo</div>' }
// const About = { template: '<div>bar</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/topic/:tRouteName', component: DetailTopic },
  { path: '/category', component: category },

]

// // 3. Create the router instance and pass the `routes` option
// // You can pass in additional options here, but let's
// // keep it simple for now.
const router = new VueRouter({
  routes
})

// // 4. Create and mount the root instance.
// // Make sure to inject the router with the router option to make the
// // whole app router-aware.


// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
const app = new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app')
