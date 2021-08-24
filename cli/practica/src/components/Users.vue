<template>
    <div>
        <h3>Desde users</h3>

        <div v-for="item in arrayUsers" :key="item.id">
          <!-- {{ item.name }} -->
            <router-link :to="`/user/${item.id}`">
                {{ item.name }}
            </router-link>
        </div>
            
    </div>
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
        //     let headers = new Headers();

        // headers.append('Content-Type', 'application/json');
        // headers.append('Accept', 'application/json');
        // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
        // headers.append('Origin','http://localhost:8000');
         try {
            const data = await fetch('http://localhost:8000/api/users')// { 
                // mode: 'no-cors',
                // method: "GET",
                // headers: {
                //     'Content-Type': 'application/x-www-form-urlencoded',
                //     'Content-Type': 'application/json'
                //  },
            //} )
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