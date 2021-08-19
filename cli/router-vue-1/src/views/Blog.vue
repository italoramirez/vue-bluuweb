<template>
  <div>
    <Titulo texto="Título de mi blog"/>
    <h2>Parámetro: {{ $route.params.id }}</h2>
  <!-- <button @click="consumirApi">Consumir Api</button> -->

    <div v-for="item in arrayBlog" :key="item.id">
        <router-link :to="`/blog/${item.id}`">
            {{ item.title }}
        </router-link>
    </div>
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
            arrayBlog: [],
        }
    },
    methods: {
        async consumirApi () {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const array = await data.json();
            console.log(array);
            this.arrayBlog = array;  
        }
    }, 
    created () {
        this.consumirApi();
    }
}
</script>

<style>

</style>