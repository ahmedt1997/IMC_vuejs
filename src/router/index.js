import { createRouter, createWebHistory } from 'vue-router'
import DailyCalorie from "../components/DailyCalorie";
import Imc from "../components/Imc";
import NotFound from "../components/NotFound";


const routes = [
  {
    path: '/DailyCalorie',
    name: 'DailyCalorie',
    component: DailyCalorie
  },
  {
    path: '/Imc',
    name: 'Imc',
    component: Imc
  },
      // redirect
  {
    path: '/',
    redirect: '/DailyCalorie'
  }
  ,
     // 404 catchall
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router