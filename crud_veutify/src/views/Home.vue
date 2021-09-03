<template>
  <div>
    <v-container>
      <v-row row wrap class="mt-3">
        <v-col md="6" sm="12">
          <v-card> 
            <v-img
              class="white--text"
              height="300px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
            </v-img>
            <v-card-title>Top 10 Australian beaches</v-card-title>
            <v-btn text color="info">Editar</v-btn>
            <v-btn text color="red">Elimiar</v-btn>
          </v-card>
        </v-col>
        <v-col md="6" sm="12">
          <v-card class="pa-3"> 
           <Nav />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  name: "Home",

  components: {
    Nav,
  },
};
</script>
