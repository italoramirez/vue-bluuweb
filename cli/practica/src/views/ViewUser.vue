<template>
<div>
  <h3>users view</h3>
  <strong>Prámetro: {{ $route.params.id }}</strong>
  <table>
    <thead>
        <tr>
            <td>
                Título
            </td>
            <td>
                Post
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
        </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {   
    name: 'ViewUser',
    data() {
        return {
            post: {}
        }
    },
    methods: {
        async consumirApi (id) {
           try {
            const data = await fetch(`http://localhost:8000/api/users${ this.$route.params.id }`)
            const obj = await data.json();
            console.log(obj);
            this.post = obj;
           } catch (error) {
            console.log(error)
           }
        }
    },
    created() {
        this.consumirApi()
    }

}
</script>

<style>

</style>