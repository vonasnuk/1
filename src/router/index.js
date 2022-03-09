import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/base-select',
    name: 'showBaseSelect',
    component: () => import('../views/showBaseSelect')
  },
  {
    path: '/base-tooltip',
    name: 'showBaseTooltip',
    component: () => import('../views/showBaseTooltip')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
