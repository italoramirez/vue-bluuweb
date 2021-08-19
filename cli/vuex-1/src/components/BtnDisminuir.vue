<template>
  <div>
    <button @click="accionDisminuir(50)">-</button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
export default {
    name: "BtnDisminuir",
    methods: {
        ...mapActions(['accionDisminuir'])
    }
}
</script>

<style>

</style>