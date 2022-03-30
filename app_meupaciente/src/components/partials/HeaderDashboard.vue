<template>
    <div class="menu">
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <h2>MEUPaciente</h2>
            </div>

            <v-spacer></v-spacer>

            <!-- <ul class="IDuser">
                <v-btn depressed color="primary" >
                    CONFIGURAÇÕES DE USUÁRIO
                </v-btn>
            </ul> -->

            <ExitUserButton/>

        </v-app-bar>
    </div>
</template>

<script>
import ExitUserButton from './ExitUserButton.vue';

export default({
    name: 'HeaderDashboard',
    components: {ExitUserButton},
    data: () => ({
        //
    })
})
</script>

<style scoped>
    .nav-link{
        color: rgb(227, 230, 245);
        text-decoration: none;
    }

    .IDuser{
        list-style: none;
        display: flex;
        flex-direction: row;
    }

    li{
        padding-right: 20px;
    }
</style>
