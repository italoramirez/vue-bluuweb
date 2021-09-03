<template>
    <v-form>
        <h3 text class="pa-2 d-flex justify-center">Diligencie los datos</h3>
        <v-divider class="mx-1"></v-divider>
        <v-text-field
            label="Name"
        >
        </v-text-field>
        <v-textarea
            label="Description"
        >
        </v-textarea>
        <v-btn color="success" block>Enviar</v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>

<style scoped>

</style>