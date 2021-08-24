<template>
    <div>
        Editar: {{ $route.params.id }}
        {{ tarea }}
        <form @submit.prevent="update(tarea)">
           <Input :tarea="tarea" />
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Input from '../components/Input'
export default {
    components: {
        Input
    },
    computed: {
        ...mapState(['tarea']),
    }, 
    methods: {
        ...mapActions(['setTask', 'update']),
    },
    created () {
        this.setTask(this.$route.params.id);
    }
}
</script>
