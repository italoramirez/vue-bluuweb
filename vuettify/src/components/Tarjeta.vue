<template>
   <v-container grid-list-md>
       <!-- wrap= respetan las columnas -->
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                        <v-layout>
                            <v-flex>
                                <span class="headline white--text">Lorem ipsum dolor sit amet consectetur</span>
                            </v-flex>  
                        </v-layout>
                    </v-img>
                    <v-card-title>
                        <h2>lorem ipsum</h2>
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A et voluptates deleniti placeat, sint porro ea numquam aperiam sunt animi perferendis molestias voluptate suscipit consequuntur. In quibusdam a ea et.
                        Mollitia facere enim odio explicabo inventore, quaerat esse consequatur, ab quas ipsum velit necessitatibus et quo voluptates ut similique animi sint? Aliquid, placeat corporis consequuntur quaerat excepturi tempora possimus voluptate!
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="info" text @click="dialog = true">Acción</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6>
                <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
                    <v-card-title>
                        <h2>lorem ipsum</h2>
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A et voluptates deleniti placeat, sint porro ea numquam aperiam sunt animi perferendis molestias voluptate suscipit consequuntur. In quibusdam a ea et.
                        Mollitia facere enim odio explicabo inventore, quaerat esse consequatur, ab quas ipsum velit necessitatibus et quo voluptates ut similique animi sint? Aliquid, placeat corporis consequuntur quaerat excepturi tempora possimus voluptate!
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="info" text>Acción</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <v-dialog v-model="dialog" width="500" persistent>
            <v-card>
                <v-card-title>
                    Título
                </v-card-title>
                <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium, alias impedit sit explicabo assumenda iste pariatur, perferendis quo a deleniti ipsa itaque? Perspiciatis, veritatis consequatur! Eligendi quisquam in autem!
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn text @click="dialog = false">Cerrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
   </v-container>
</template>

<script>
    name: 'Tarjeta'
    export default {
        data() {
            return {
                dialog: false
            }
        }
    }
</script>

</style>