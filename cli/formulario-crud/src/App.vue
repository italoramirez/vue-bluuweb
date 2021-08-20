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
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>