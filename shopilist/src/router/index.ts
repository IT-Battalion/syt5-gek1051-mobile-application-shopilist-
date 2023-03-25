import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Shopilist from '../views/ShopilistView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/shopilist'
  },
  {
    path: '/shopilist',
    name: 'Shopilist',
    component: Shopilist
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
