import Vue from 'vue'
import VueRouter from 'vue-router'
import { authGuard } from '../auth/authguard';

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/externalapi',
    name: 'externalapi',
    component: () => import('../views/ExternalApiView.vue'),
    beforeEnter: authGuard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
