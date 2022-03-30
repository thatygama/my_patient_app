<template>
    <v-btn depressed color="primary" v-on:click="logout" >
        <div v-on:click="clearLocalStorage">
            <router-link class="linkRouter" to="/">SAIR</router-link>
        </div>
    </v-btn>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ExitUserButton',
    mounted: function(){
        let jwt = localStorage.getItem('jwt')

        if(jwt == '' || typeof jwt == 'undefined' || jwt == null){
            this.$router.push({name: 'acesso'})
        }
    },
    methods: {
    logout: function(){
        try{
          axios.post('http://localhost:3333/logout', ).then(json => {
          console.log(json.data);
          this.$router.replace({name: 'homePage'})
        })}catch(error){
          console.log('Erro de logout.')
        }
    },
    clearLocalStorage: function(){
        window.localStorage.clear()
    }
  }
}
</script>

<style scoped>
    .linkRouter {
        color: rgb(253, 170, 170);
        text-decoration: none;
    }
</style>