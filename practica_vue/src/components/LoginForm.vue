<template>
  <section>
    <form role="form">
      <div class="login container">

        <label for="ejemplo_email_1">E-mail Address</label>
        <input
          type="email"
          class="form-control mb-2"
          id="ejemplo_email_1"
          placeholder="E-mail address"
          v-model="user.email"
        >
        <label for="ejemplo_password_1">Password</label>
        <input
          type="password"
          class="form-control mb-2"
          id="ejemplo_password_1"
          placeholder="Password"
          v-model="user.password"
          @keypress.enter='login'
        >
        <label for="ejemplo_password_1">Don't have an account? Greate Account</label><br>
        <button
          type="button"
          class="btn btn-danger btn-block"
          @click="login"
        >Login</button><br>
        <button
          type="button"
          class="btn btn-outline-primary btn-block"
        >Login whit Facebook</button><br>
        <label for="ejemplo_password_1">Clase de Proyecto Integral Web 2020</label>
      </div>
    </form>
  </section>
</template>
//Aqui ubicamos todo el javascript de nuestros componentes o views
<script lang="js">

import Auth from '@/config/auth.js'
export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },

  beforeCreate () {
    console.log('Estoy en un beforecreated')
  },
  created () {
    console.log(`Estoy en un created ${this.user}`)
  },
  mounted () {
    // Auth.signUp(this.user)
    console.log(`Estoy en monted ${this.user}`)
    console.log(`Estoy en  ${this.$route.name}`)
  },
  methods: {
    login () {
      // Esta variable es de uso local de nuestro método
      /* let user = {
        email: 'esto es local'
      } */
      console.log('Soy un login')
      // console.log('user local: ' + user.email)
      console.log('user from data:' + this.user.email)
      console.log(this.user.password)
      Auth.signUp(this.user)
      setTimeout(() => {
        // Despues de iniciar sesion nos envia a la página de about
        this.$router.push({ name: 'about' })// Rouer para navegar entre rutas router para mover
      }, 1000)
    },
    signup () {
      setTimeout(() => {
        // Despues de iniciar sesion nos envia a la página de about
        this.$router.push({ name: 'signup' })// Rouer para navegar entre rutas router para mover
      }, 1000)
    }
  }
}

</script>
//Style, ubicamos el css relacionado a nuestros views y componentes
<style lang="scss">
