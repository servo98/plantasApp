import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'

import Greenhouse from '../components/Greenhouse.vue'
import Infoplanta from  '../components/plantinfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/greenhouse',
    name: 'greenhouse',
    component: Greenhouse
  },
  {
    path: '/infoplanta',
    name: 'infoplanta',
    component: Infoplanta
  },
  {
    path: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
