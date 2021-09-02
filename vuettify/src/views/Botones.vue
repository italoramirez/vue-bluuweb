<template>
    <v-container>
        <v-layout>
            <v-flex>

                <v-btn>Texto</v-btn>
                <v-btn color="success">Texto</v-btn>
                <v-btn dark color="blue">Texto</v-btn>

                <v-btn color="" flat>Sin fondo</v-btn>
                <v-btn color="red" large>Largo</v-btn>
                <v-btn color="red" small>small</v-btn>
                <v-btn color="red" small depressed>depres</v-btn>
                <v-btn>
                    <v-icon>
                        mdi-heart  
                    </v-icon>    
                </v-btn>                
                <v-btn>
                    <v-icon color="success">
                        mdi-cached  
                    </v-icon>    
                </v-btn>                


            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>