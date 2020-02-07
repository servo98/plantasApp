import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'

import Greenhouse from '../components/Greenhouse.vue'
import Plantinfo from  '../components/Plantinfo.vue'
import Cart from '../components/Cart.vue'
import Profile from '../components/Profile.vue'
import First from '../components/First.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    meta: {
      guest: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      guest: true
    }
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
    path: '/plantinfo',
    name: 'plantinfo',
    component: Plantinfo,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      auth: true
    }
  },
  {   
    path: '/first',
    name: 'first',
    component : First,


  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      auth: true
    }
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

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.auth)){
    if(localStorage.token == null){
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }

      })
    }else{
      next()
    }
  }else{
    next()
  }
});

export default router
