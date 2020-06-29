import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
Vue.use(VueRouter)
import Home from '../pages/home'
import Cate from '../pages/cate'
import Cart from '../pages/cart'
import My from '../pages/my'

const routes = [
  { path:'/',redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path:"/cate",
    component: Cate
  },
  {
    path:"/cart",
    component: Cart
  },
  {
    path:"/my",
    component: My
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'active'
})

export default router
