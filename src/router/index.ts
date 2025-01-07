import { createRouter, createWebHistory } from 'vue-router'
import IntroduceView from '@/views/IntroduceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/introduce',
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: () => import('../views/IntroduceView.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PortfolioView.vue'),
    },
  ],
})

export default router
