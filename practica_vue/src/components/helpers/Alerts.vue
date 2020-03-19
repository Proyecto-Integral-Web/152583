<template>
  <section v-if="error">
    <div
      class="alert animated tada"
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
  data () {
    return {
      tipo: 'alert-success'
    }
  },

  mounted () {
    switch (this.code) {
      case ' auth/user-not-found':
        this.tipo = 'alert-danger'
        break
      case 'auth/invalid-email':
        this.tipo = 'alert-warning'
        break
      case 'auth/wrong-password':
        this.tipo = 'alert-warning'
        break
      default:
        this.tipo = 'alert-primary'
        break
    }
  }

  //    code(value){
  //    switch(this.code){}
  //    }
}

</script>
<style lang="scss">
</style>
