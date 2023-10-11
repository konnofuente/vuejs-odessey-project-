import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ManageView from '../views/ManageView.vue'

const routes=[
  {
    path:'/',
    name:'home',
    component: HomeView,
    
  },
  {
    path:'/about',
    name:'about',
    component: AboutView,

  },
  {
    path:'/manage-music',
    alias:'/manage',
    name:'manage',
    component: ManageView,
    beforeEnter: (to, from, next) => {
      console.log('Manage ')
      next();
    }

  },
  {
    path:'/:catcheAll(.*)*',
    redirect:{name:'home'}

  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass:'text-yellow-500'
})


router.beforeEach((to, from,next) => {
  console.log("global guard")
  
  next()
})

export default router
