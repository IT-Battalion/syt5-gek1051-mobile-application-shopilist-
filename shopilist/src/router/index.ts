import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Shopilist from '../views/ShopilistView.vue'
import AddItems from '../views/AddItemsView.vue'

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
  {
    path: '/add',
    name: 'Add Items',
    component: AddItems
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
