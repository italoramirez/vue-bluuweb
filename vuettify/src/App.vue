<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Vuetify</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn class="success"> Ingresar</v-btn>
    <v-btn class="dark"> Salir</v-btn>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="ml-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary absolute>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img ml-3 src="https://randomuser.me/api/portraits/women/81.jpg" alt="">
          </v-avatar>
        </v-flex>
      </v-layout>
    </v-navigation-drawer >

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      drawer: false
    }
  },
};
</script>
