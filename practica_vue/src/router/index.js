import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// Importamos la nueva vista
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  // Agregamos ruta de login
  {
    path: '/', // Asignamos path, tiene que se rúnico
    name: 'login', // Asingamos nombre único
    component: Login, // Declaramos componentes
    meta: {
      auth: false//* se usa para controlar el acceso a usiarios o no
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      auth: true //* se utuliza para hacer el acceso a usuarios o no }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
