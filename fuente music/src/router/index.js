import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ManageView from '../views/ManageView.vue'
import SongView from '../views/SongView.vue'
// import useUserStore from '../stores/user'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,

  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,

  },
  {
    path: '/manage-music',
    alias: '/manage',
    name: 'manage',
    component: ManageView,
    beforeEnter: (to, from, next) => {
      console.log('Manage ')
      next();
    },
    meta: {
      requiresAuth: true
    }

  },
  {
    name:'song',
    component:SongView,
    path: '/song/:id',

  },
  {
    path: '/:catcheAll(.*)*',
    redirect: { name: 'home' }

  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})


router.beforeEach((to, from, next) => {

  next()

  // //TODO: make navigation with meta donner
  // console.log("global guard")
  // if (!to.meta.requiresAuth) {
  //   next();
  //   return
  // }
  // // next()
  // const store = useUserStore

  // if (store.userLoggedIn) {
  //   console.log("can nav")
  //   next()
  // } else {
  //   next({ name: 'home' })
  // }
})

export default router
