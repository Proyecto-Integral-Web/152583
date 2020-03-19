<template>
  <div class="home">
    <div class="card">
      <h1>SIGNUP</h1><br>
      <div class="row">
        <div class="col-md-6">
          <signupform></signupform>
        </div>
        <div class="col-md-6">
          <img src="@/assets/playera.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">

import SignUpForm from '@/components/SignUpForm.vue'
export default {
  name: 'signup',
  components: SignUpForm
}

</script>

<style lang="scss">
body {
  padding: 100px;
  margin: 100px;
  background-color: rgb(0, 0, 0);
  background-image: url(http://img.webme.com/pic/w/webcp/bge02.jpg);

  .card {
    padding: 30px;
    font-family: Century Gothic;
    background-color: rgba(154, 199, 32, 0.479);
    color: white;
  }
}
</style>
