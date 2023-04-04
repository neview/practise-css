import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Coupon from '../views/Coupon.vue'
import Cartoon from '../views/Cartoon.vue'
import Watermark from '../views/Watermark.vue'
import Three from '../views/Three.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: Coupon
    },
    {
      path: '/cartoon',
      name: 'cartoon',
      component: Cartoon
    },
    {
      path: '/watermark',
      name: 'watermark',
      component: Watermark
    },
    {
      path: '/three',
      name: 'three',
      component: Three
    }
  ]
})

export default router
