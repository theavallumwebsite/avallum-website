import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StreamsView from '../views/StreamsView.vue'
import MerchView from '../views/MerchView.vue'
import MusicView from '../views/MusicView.vue'
import MembersView from '../views/MembersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/streams',
      name: 'Streams',
      component: StreamsView
    },
    {
      path: '/merch',
      name: 'Merch',
      component: MerchView
    },
    {
      path: '/music',
      name: 'Music',
      component: MusicView
    },
    {
      path: '/members',
      name: 'Members',
      component: MembersView
    }
  ]
})

export default router
