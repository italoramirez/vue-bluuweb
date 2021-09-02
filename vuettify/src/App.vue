<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title to="/">Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="success">Ingresar</v-btn>
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
      <!-- <v-layout mt-4 column align-center> -->
        <v-list
            nav
           dense
         >

          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item to="/grid">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Grid</v-list-item-title>
            </v-list-item>

            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>
                  mdi-account
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item to="/boton">
              <v-list-item-icon>
                <v-icon>
                  mdi-home
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title>Botón</v-list-item-title>
            </v-list-item>

            <v-list-item to="/card">
              <v-list-item-icon>
                <v-icon>
                  mdi-account
                </v-icon>
              </v-list-item-icon>
                <v-list-item-title>
                  Cards
                </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      <!-- </v-layout> -->
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      drawer: false,
      group: null
    };
  },
};
</script>
