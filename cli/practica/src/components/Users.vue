<template>
  <h3>Desde users</h3>
  <!-- <div v-for="item in arrayUsers" :key="item.id">
      {{ item.name }}
  </div> -->
</template>

<script>
export default {
    name: 'Users',
    data() {
        return {
          arrayUsers : []
        }
    },
    methods: {
        async viewData() {
         try {
            const data = await fetch('http://localhost:3000/api/users', { 
                mode: 'no-cors',
                method: "GET",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Type': 'application/json'
                 },
            } )
            const array = await data.json();
            this.arrayUsers = array;
            console.log(array);
         } catch (error) {
             console.log(error);
         }
        }
    }, 
    created() {
        this.viewData();
    }
}
</script>

<style>

</style>