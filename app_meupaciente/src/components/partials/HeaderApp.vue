<template>
    <v-app-bar app color="primary" dark @submit.prevent>
      <div class="d-flex align-center">
        <h2>MEUPaciente</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn depressed color="primary" >
          <router-link class="nav-link" to="/">Início</router-link>
      </v-btn>

      <v-btn depressed color="primary" >
          <router-link class="nav-link" to="/atendimentos_medicos">Atendimentos Médicos</router-link>
      </v-btn>

      <v-btn depressed color="primary" >
        <router-link class="nav-link" to="/contato">Contato</router-link>
      </v-btn>

      <v-btn target="_blank">
        <span class="mr-2" type="button">
            <router-link class="nav-link" type="button" to="/acesso">Área de Acesso</router-link>
        </span>
        <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default({
    name: 'HeaderApp',
    data: () => ({
        //
    }
  )
})
</script>

<style scoped>
    .nav-link{
        color: rgb(227, 230, 245);
        text-decoration: none;
    }


    /* fazer responsividade menu  */
</style>
