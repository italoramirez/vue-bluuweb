<template>
  <div class="">
    <form @submit.prevent="procesarFormulario">
      <Input :tarea="tarea"   />
    </form>
    <hr>
    <p>{{ tarea }}</p>
    <ListaTarea />
  </div>
</template>

<script>
// @ is an alias to /src
import Input from '../components/Input.vue'
import ListaTarea from '../components/ListaTarea.vue'
import { mapActions } from 'vuex'
const shortid = require('shortid');

export default {
  name: 'Home',
  components: {
    Input, 
    ListaTarea
  },
  data() {
    return {
      tarea : {
        id         : '',
        nombre     : '',
        categorias : [],
        estado     : '',
        numero     : 0
      }
    }
  },
  methods: {
    ...mapActions(['setTareas']),
    procesarFormulario () {
      console.log(this.tarea)
      if (this.tarea.nombre.trim() === '') {
        console.log('vacío')
        return
      }
      //generar id
      this.tarea.id = shortid.generate();
      console.log(this.tarea.id);

      //Generar los datos
      this.setTareas(this.tarea)

      //limpiar formulario 
      this.tarea = {
        id         : '',
        nombre     : '',
        categorias : [],
        estado     : '',
        numero     : 0
      }
    }
  }, 
 
}
</script>
