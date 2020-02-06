<template>
  <section>

    <form role="form">
      <div class="form-group">
        <label for="ejemplo_email_1">E-mail Address</label>
        <input
          type="email"
          class="form-control"
          id="ejemplo_email_1"
          placeholder="E-mail address"
        >
      </div>
      <div class="form-group">
        <label for="ejemplo_password_1">Password</label>
        <input
          type="password"
          class="form-control"
          id="ejemplo_password_1"
          placeholder="Password"
        >
        <label for="ejemplo_password_1">Don't have an account? Greate Account</label><br>
        <button
          type="button"
          class="btn btn-danger btn-block"
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
export default {
  name: 'LoginForm'
}
</script>
//Style, ubicamos el css relacionado a nuestros views y componentes
<style lang="scss"></style>
