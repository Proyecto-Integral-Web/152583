<template>
  <section v-if="error">
    <div
      class="alert"
      :class="
      code=='auth/invalid-email'
      ?'alert-warning':'alert-danger'"
    >
      {{message}}
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'AlertsComponent',
  props: ['error', 'code', 'message'],

  mounted () {
    switch (this.code) {
      case ' auth/user-not-found':
        this.tipo = 'alert-danger'
        break
      case 'auth/invalid-email':
        this.tipo = 'alert-warning'
        break
      default:
        this.tipo = 'alert-primary'
        break
    }
    //    code(value){
  //    switch(this.code){}
    //    }
  }
}
</script>
<style lang="scss">
</style>
