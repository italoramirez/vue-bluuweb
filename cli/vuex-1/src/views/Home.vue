<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1
      :style="colorContador"
    >
      {{ titulo }}: {{ contador }}
    </h1>
    <button @click="accionIncrementar">+</button>
    <BtnDisminuir />
    <BotonAccion :estado="true" />
    <BotonAccion :estado="false" />
  </div>
</template>

<script>
import BtnDisminuir from '../components/BtnDisminuir'
import BotonAccion from '../components/BotonAccion'
import { mapState, mapMutations, mapActions } from "vuex"

export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    BotonAccion
  },
  data() {
    return {
      titulo: 'Mi contador vuex'
    }
  },
  computed: {
    ...mapState(['contador']),
    colorContador() {
      return [this.contador >= 50 ? {'color': 'green'} : {'color': 'red'}]
    }
  },
  methods: {
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar']),
    ...mapActions(['accionDisminuir'])
  }
}
</script>
