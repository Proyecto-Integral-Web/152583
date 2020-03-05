import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Auth from './config/auth'
import 'animate.css'

// Librerias de usuario

import 'bootstrap/scss/bootstrap.scss'
Vue.config.productionTip = false

// Metodo de comprobacion de permiso de acceso
router.beforeEach(async (to, from, next) => {
  // Verificar las rutas que necesitan autorizacion
  if (to.meta.auth) {
    console.log('Necesita permiso para ingresar')
    // Traer informacion del usuario actual
    let user = await Auth.checkUser()
    console.log(`User: ${user}`)
    // comprobar que haya un usuario
    if (user == null) {
      // Si no hay usuario enviar a login
      next({
        name: 'login'
      })
      return
    }
    // Si hay usuario se ingresa a la ruta
    console.log(`Usuario logeado: ${user.email}`)
    next()
  }
  next()
})

// router.beforeEach((to, from, next) => {
// if (to.meta.auth) {
// console.log('Necesitas permiso para entrar')
// }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
