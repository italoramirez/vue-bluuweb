<template>
  <div>
    <Titulo texto="Título de mi articulo"/>
    <h2>Parámetro: {{ $route.params.id }}</h2>
    <small>Id: {{ articulo.id }}</small>
    <h3>Título: {{ articulo.title }}</h3>
    <p>Post: {{ articulo.body }}</p>
   
  </div>
</template>

<script>

import Titulo from '../components/Titulo'

export default {
    components: {
        Titulo
    },
    data () {
        return {
            articulo: {}
        }
    },
    methods: {
        async consumirArticulo(id) {
           try {
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                const obj = await data.json();
                console.log(obj);
                this.articulo = obj;
           } catch (error) {
               console.error(error)
           }
        }
    },
    created(){
        this.consumirArticulo()
    }
   
}
</script>

<style>

</style>