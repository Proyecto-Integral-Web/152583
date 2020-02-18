<template>
  <div class="home">
    <div class="card">
      <h1>Netze</h1>
      <div class="row">
        <div class="col-md-4">
          <loginForm></loginForm>
        </div>
        <div class="col-md-4">
          <img src="@/assets/fotolateral.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">

import LoginForm from '@/components/LoginForm'
export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>

<style lang="scss">
body {
  background-color: rgb(212, 81, 81);
}
</style>
