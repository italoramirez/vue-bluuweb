<template>
  <div id="nav">
    <NavBar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>

import NavBar from './components/NavBar'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    NavBar
  },
  methods: {
    ...mapActions(['cargarLocalStorage'])
  }, 
  created () {
    this.cargarLocalStorage();
   }
}
</script>