<template>

  <v-container>
    <v-layout wrap>
      <v-flex class="primary" xs6 md8>
        <h1>12</h1>
      </v-flex>
      <v-flex class="info" md12>
        <h1>6</h1>
      </v-flex>
    </v-layout>
    <v-layout mt-2 justify-center align-center style="height: 100px" primary>
      <v-flex class="warning" xs3>
        <h1>Centrado</h1>
      </v-flex>
      <v-flex red accent-2 xs3 red--text>
        <h1>Centrado 2</h1>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <p class="display-1 text-uppercase" xs1>Lorem</p>
        <p class="display-2">Lorem</p><br>
        <p class="display-3 text-md-center">Lorem</p>
        <p class="display-4">Lorem</p>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>

  export default {

  }
</script>
