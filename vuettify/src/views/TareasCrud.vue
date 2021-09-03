<template>
    <v-container>
        <v-row  wrap class="mt-2">
            <v-col sm="12" md="6" cols="12" class="">
                <v-card class="mb-2" v-for="(item , index) in listaTareas" :key="index">
                   <v-card-text>
                        <v-chip
                            class="ma-2 ml-0"
                            color="pink"
                            label
                            text-color="white"
                        >
                        <v-icon left>
                            mdi-label
                        </v-icon>
                            Título tarea {{ item.id }}
                        </v-chip>
                       <p>
                           {{ item.descripcion }}
                       </p>
                       <v-btn color="primary" class="" text @click="editar(index)">Editar</v-btn>
                       <v-btn color="error" text @click="eliminarTarea(item.id)">Eliminar</v-btn>
                   </v-card-text>
                </v-card>
                <!-- <v-card class="mb-2">
                   <v-card-text>
                        <v-chip
                            class="ma-2 ml-0"
                            color="pink"
                            label
                            text-color="white"
                        >
                        <v-icon left>
                            mdi-label
                        </v-icon>
                            Título tarea 1
                        </v-chip>
                       <p>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi id ad natus, tempora reiciendis, laborum ullam explicabo eum assumenda praesentium soluta sint facere repudiandae amet nam delectus recusandae facilis ducimus.
                       </p>
                       <v-btn color="primary" class="" text>Editar</v-btn>
                       <v-btn color="error" text>Eliminar</v-btn>
                   </v-card-text>
                </v-card> -->
            </v-col>
            <v-col sm="12" md="6" cols="12" class="" v-if="formAgregar">
                <v-card class="pa-3">
                    <v-form @submit.prevent="agregarTarea">
                        <v-text-field label="Título de la tarea" v-model="titulo"></v-text-field>
                        <v-textarea label="Descripción de tarea" v-model="descripcion"></v-textarea>
                        <v-btn block color="success" type="submit">Agregar Tareas</v-btn>
                    </v-form>
                </v-card>
            </v-col>
            <v-col sm="12" md="6" cols="12" class="" v-if="!formAgregar">
                <v-card class="pa-3">
                    <v-form @submit.prevent="editarTarea">
                        <v-text-field label="Título de la tarea" v-model="titulo"></v-text-field>
                        <v-textarea label="Descripción de tarea" v-model="descripcion"></v-textarea>
                        <v-btn block color="info" type="submit">Editar Tareas</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>

        <v-snackbar
         v-model="snackbar"
        >
            {{ mensaje }}

            <template >
                <v-btn
                color="pink"
                text
                @click="snackbar = false"
                >
                Cerrar
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default ({
    data () {
        return {
            listaTareas: [
                { 
                    id: 1, 
                    titulo: 'Título tarea 1', 
                    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi id ad natus, tempora reiciendis, laborum ullam explicabo eum assumenda praesentium soluta sint facere repudiandae amet nam delectus recusandae facilis ducimus.' 
                },
                { 
                    id: 2, 
                    titulo: 'Título tarea 2', 
                    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi id ad natus, tempora reiciendis, laborum ullam explicabo eum assumenda praesentium soluta sint facere repudiandae amet nam delectus recusandae facilis ducimus.' 
                }
            ], 
            titulo: '',
            descripcion: '',
            snackbar: false, 
            mensaje: '',
            formAgregar: true,
            indexTarea: ''
        }
    },
    methods: {
       agregarTarea () {
           console.log(this.titulo, this.descripcion);
           if (this.titulo === "" || this.descripcion ==="") { 
               this.snackbar = true;
               this.mensaje = 'Llena todos los campos'
           } else {
               this.listaTareas.push({
                   id: Date.now(),
                   titulo: this.titulo,
                   descripcion: this.descripcion
               })
               this.titulo = '';
               this.descripcion = '';
               this.snackbar = true;
               this.mensaje = 'Tarea Agregada'
           }
       },
       eliminarTarea ( id ) { 
           console.log( id );
           this.listaTareas = this.listaTareas.filter( e => e.id != id );
       }, 
       editar ( index ) { 
           this.formAgregar = false
           this.titulo = this.listaTareas[ index ].titulo
           this.descripcion = this.listaTareas[ index ].descripcion
           this.indexTarea = index
       },
       editarTarea () { 
           this.listaTareas[this.indexTarea].titulo = this.titulo
           this.listaTareas[this.indexTarea].descripcion = this.descripcion
           this.formAgregar = true

           this.titulo = ''
           this.nombre = ''
           this.snackbar = true;
           this.mensaje = 'Tarea Editada'
       }
    }
})
</script>
