<template>
  <section>
    <form role="form">
      <div class="login container">
        <div class="=card p-3">
          <div class="col-med-6">
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
            <div class="col-md-6">
              <img
                src="@/assets/login.png"
                class="rounded float right"
              >
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>
//Aqui ubicamos todo el javascript de nuestros componentes o views
<script lang="js">
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
  created () {
    // console.log('Estoy en created ${this.user}')
  },
  mounted () {
    // console.log('Estoy en mounted ${this.user}')
    // this.login()
  },
  methods: {
    login () {
      console.log('Soy el login')
      console.log(this.user.email)
      console.log(this.user.password)
      setTimeout(() => {
        this.$router.push({ name: 'about' })
      }, 1000)
    }
  }
}

</script>
//Style, ubicamos el css relacionado a nuestros views y componentes
<style lang="scss"></style>
