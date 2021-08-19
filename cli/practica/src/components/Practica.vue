<template>
  <div>
    <h2>Desde componente</h2>
    <button @click="incrementar">Click</button>
    <h4>{{ contar }}</h4>
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    name: 'Practica',
    computed: {
        ...mapState(['contar'])
        // ...mapMutations(['incrementar'])
    },
    methods: {
        ...mapActions(['incrementar'])
    }

}
</script>

<style>

</style>