import Vue from 'vue'
import VueRouter from 'vue-router'
import Main1 from '../views/Main1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main1',
    component: Main1
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
