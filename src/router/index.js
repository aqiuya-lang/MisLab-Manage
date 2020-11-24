import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import('../views/login.vue')
const register = () => import('../views/register.vue')
const home = () => import('../views/home.vue')
const changeHome = () => import('../components/content/MisLabHome.vue')
const direction = () => import('../components/content/MisLabDirection.vue')
const production = () => import('../components/content/MisLabProduction.vue')
const senior = () => import('../components/content/MisLabSenior.vue')
const changePro = () => import('../components/content/change/ChangePro.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: login
  },
  {
    path:'/register',
    component: register

  },
  {
    path: '/index',
    component: home,
    children:[
      {
        path: '/',
        component: changeHome

      },
      {
        path: '/index/direction',
        component: direction
      },
      {
        path: '/index/production',
        component: production
      },
      {
        path: '/index/senior',
        component: senior
      },
      {
        path: '/index/changePro',
        component: changePro
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
