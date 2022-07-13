import Vue from 'vue'
import VueRouter from 'vue-router'
// import layout from '../layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout'),
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile')
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('../views/users')
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('../views/roles')
      },
      {
        path: '/menus',
        name: 'menus',
        component: () => import('../views/menus')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
