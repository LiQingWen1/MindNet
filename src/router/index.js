import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/404')
      },
      { path: '*', redirect: '/404', hidden: true }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
