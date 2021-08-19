<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <Practica />
  </div>
</template>
<script>
import Practica from '../components/Practica'
export default {
  components: {
    Practica,
  },
  data() {
    return {
      title: 'Vuex'
    }
  },
  
}
</script>
