<template>
  <section>
    <form role="form">
      <div class="login container">
        <alerts-component:
          v-if="showMessage"
          :message="Esto es un error"
          :code=erroCode
        >
          </alerts-component>

          <label for="ejemplo_email_1">Correo electrónico</label>
          <input
            type="email"
            class="form-control mb-2"
            id="ejemplo_email_1"
            placeholder="E-mail address"
            v-model="user.email"
          >
          <label for="ejemplo_password_1">Contraseña</label>
          <input
            type="password"
            class="form-control mb-2"
            id="ejemplo_password_1"
            placeholder="Password"
            v-model="user.password"
            @keypress.enter='login'
          ><br>

          <button
            type="button"
            class="btn btn-danger btn-block "
            @click="login"
          >Registrarse</button><br>
          <label for="ejemplo_password_1">¿No tienes una cuenta?</label><br>
          <button
            type="button"
            class="btn btn-outline-primary btn-block"
          >Iniciar Sesión</button><br>

      </div>
    </form>
    <label for="ejemplo_password_1">Proyecto Integral Web 2020</label>
  </section>
</template>
//Aqui ubicamos todo el javascript de nuestros componentes o views
<script lang="js">

import Auth from '@/config/auth.js'

import AlertsComponent from './helpers/Alerts'

export default {
  name: 'LoginForm',
  components:{
  data () {
    return {
showError:false,
errorMessage:'',
errorCode:'',

user: {
email: 'noriloga@gmail.com',
        password: '1234'
      //  nombre:'norma'
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
      let user = {
        email: 'esto es local'
      }
      console.log('Soy un login')
      console.log('user local: ' + user.email)
      console.log('user from data:' + this.user.email)
      console.log(this.user.password)
      Auth.signUp(this.user)
      Auth.login(this.user).catch(error=>{
        console.log('Estoy en loginfform')
        console.log('Esto es un error:' + error.code,error.message)
  this.showError=true
  this.errorMessage=error.message
  this.errorCode = error.code
})
      setTimeout(() => {
        console.log(this.user.password)
        Auth.signUp(this.user)
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
body {
  font-family: Century Gothic;
  background-color: rgb(0, 0, 0);

  .btn-danger {
    background-color: grey;
    border-color: rgb(154, 199, 32);
  }
  .btn-danger:hover {
    background-color: black;
    border-color: black;
  }
  .btn-outline-primary {
    background-color: blue;
    color: white;
  }
  .btn-outline-primary:hover {
    background-color: black;
    border-color: black;
  }
}
</style>
