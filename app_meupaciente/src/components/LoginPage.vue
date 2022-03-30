<template>
  <div class="loginPage">
      <h3>ÁREA DE ACESSO AO USUÁRIO</h3>
      <div class="formLogin">
        
          <v-form ref="form">
            <v-text-field v-model="email" :rules="[v => !!v || 'Preencha o seu email de login!']" type="email" label="Email de Acesso" required>
            </v-text-field>

            <v-text-field v-model="password" :counter="10" :rules="[v => !!v || 'Preencha a sua senha!']" type="password" maxlength=10 label="Senha" required>
            </v-text-field>

            <v-select v-model="user_type" :items="typeUser" :rules="[v => !!v || 'Preencha o seu tipo de acesso!']" label="Tipo de Acesso" required>
            </v-select>

            <v-btn class="mr-4" v-on:click="login" >
              Login
            </v-btn>
            <!-- <v-btn type="button">
              Recuperar Senha
            </v-btn> -->
          </v-form>

        <p id="createUser">
          <router-link class="nav-link" to="/novo_usuario">Ainda não fez seu cadastro?<br>Confira nossos planos e faça parte da evolução tecnólogica na saúde!</router-link>
        </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginPage',
    data: () => ({
        typeUser: [
        "Paciente", "Medico", "Funcionario"
    ],
      email: '',
      password: '',
      user_type: '',
      verifyUserType: '',
      verifyEmail: ''
    }),
  methods: {
    login: function(){
      if(this.email == '' || this.password == '' || this.user_type == ''){
        alert('Preencha todas as informações!')
      } else{ axios.post('http://localhost:3333/login', {
        email: this.email, 
        password: this.password,
        user_type: this.user_type
      }).then(response => {
        if (response.data.token) {       /*  prevenir login fora da rota real do email + user_type    */
          localStorage.setItem('email', this.email);
          localStorage.setItem('user_type', this.user_type);
          localStorage.setItem('jwt', response.data.token);
          switch(this.user_type){
            case 'Medico':
              this.$router.push({name: 'medico'})
              break;
            case 'Funcionario':
              this.$router.push({name: 'funcionario'})
              break;
            case 'Paciente':
              this.$router.push({name: 'paciente'})
              break;
            default:
              break;
          }
          } else{
          alert("Erro no Login!")
        }
      }).catch(error => alert('Email não cadastrado! Faça o seu cadastro.', error.response.data));
      }
    },
    
  },
  mounted: function(){
    this.user_type = JSON.stringify(localStorage.getItem('user_type')).replace(/"/g, '')
    let jwt = localStorage.getItem('jwt')

    if(jwt == '' || typeof jwt == 'undefined' || jwt == 'null'){
      this.$router.push({name: 'acesso'})
    }
  }
}
</script>

<style scoped>
  .loginPage{
      text-align: center;
      height: 60vh;
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }

  .loginPage h3{
      color: #4e8ed8;
  }

  .formLogin{
      width: 40%;
      min-height: 500px;
      margin: auto;
  }

  #createUser{
    margin-top: 20px;
    font-size: 13px;
  }

  .nav-link:hover{
    color: #1c3d63;
  }

  .v-btn{
    margin-top: 20px;
  }

</style>
