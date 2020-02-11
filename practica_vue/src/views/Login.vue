<template>
  <div class="home">
    <h1>Bienvenido</h1>
    <div class="col-md-6">
      <loginForm></loginForm>

    </div>
    <div class="col-md-6">
      <img src="@/assets/fotolateral.jpg">
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
</style>
