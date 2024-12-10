import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CassianView from '@/views/CassianView.vue'
import GaleView from '@/views/GaleView.vue'
import ZanderView from '@/views/ZanderView.vue'
import RoscoView from '@/views/RoscoView.vue'
import LucienView from '@/views/LucienView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cassianfloros',
      name: 'Cassian',
      component: CassianView
    },
    {
      path: '/galegalleon',
      name: 'Gale',
      component: GaleView
    },
    {
      path: '/zandernetherbrand',
      name: 'Zander',
      component: ZanderView
    },
    {
      path: '/roscograves',
      name: 'Rosco',
      component: RoscoView
    },
    {
      path: '/lucienlunaris',
      name: 'Lucien',
      component: LucienView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    }
  }
})

export default router
