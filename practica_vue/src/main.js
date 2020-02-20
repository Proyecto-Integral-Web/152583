import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/scss/bootstrap.scss'
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    console.log('Necesitas permiso para entrar')
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
