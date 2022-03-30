<template>
  <div class="createUser formCreate">
        <h2>CRIAR NOVO USUÁRIO</h2>

        <v-select v-model="user_type" :items="typeUser" :rules="[v => !!v || 'Preencha o seu tipo de acesso!']" label="Tipo de Acesso" required>
        </v-select>

        <v-form ref="form"  lazy-validation>
        <v-text-field v-model="name" :rules="[v => !!v || 'Preencha com o seu primeiro nome!']" label="Nome" maxlength=100 required>
        </v-text-field>

        <v-text-field v-model="last_name" :rules="[v => !!v || 'Preencha com o restante do seu nome!']" label="Sobrenomes" maxlength=100 required>
        </v-text-field>

        <v-text-field v-model="password" :rules="[v => !!v || 'Defina a sua senha!']" :counter="10" type="password" maxlength=10 label="Senha" required>
        </v-text-field>

        <v-text-field v-model="email" :rules="[v => !!v || 'Defina o seu email!']" type="email" label="E-mail" required>
        </v-text-field>
  
    
    

          <div v-if="user_type == 'Medico'">
              <v-text-field v-model="crm" :rules="[v => !!v || 'Preencha o número do seu CRM!']" type="text" label="Número do CRM - (Ex.: 01010101)" required>
              </v-text-field>

              <v-text-field v-model="speciality" :rules="[v => !!v || 'Preencha a sua especialidade!']" type="text" label="Especialidade Médica" required>
              </v-text-field>
          </div>

          <div v-if="user_type == 'Funcionario'">
              <v-text-field v-model="register" :counter="15" :rules="[v => !!v || 'Preencha o número do seu registro na empresa!']" type="text" maxlength=20 label="Número da Matrícula na Empresa" required>
              </v-text-field>
          </div>

          <div v-if="user_type == 'Paciente'">
            <v-text-field v-model="chart" :counter="15" :rules="[v => !!v || 'Preencha o número do seu prontuário!']" type="text" maxlength=20 label="Número do seu Prontuário" required>
            </v-text-field>
            </div>
        
        <v-btn class="mr-4" v-on:click.once="addUser" >
        <div v-on:keyup.13="addUser">
        Cadastrar
        </div>
        </v-btn>
        
        <v-btn>
          <router-link class="nav-link" to="./acesso">Retornar ao Login</router-link>
        </v-btn>
          </v-form>

          <div id="confirmLoginUserType"> 
            <div class="confirmBox">
            <h2>Deseja confirmar cadastro de usuário?</h2>
            <v-btn
                class="mr-4" v-on:click.once="addUserType">
              <div v-on:keyup.13="addUser">
              Confirmar
              </div>
            </v-btn>
        
        <v-btn v-on:click.once="delUser">
          <router-link class="nav-link" to="./acesso">Cancelar</router-link>
        </v-btn>
            </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CreateUser',
    data: () => ({
        typeUser: [
        "Paciente", "Medico", "Funcionario"
    ],
      user_type: '',
      name: '',
      last_name: '',
      email: '',
      user_email: '',
      password: '',
      chart: '',
      speciality: '',
      crm: '',
      register: '',
      user: {},
      userType: {}
    }),
      methods:{
        addUser: async function(){
        if(this.name != '' && this.last_name != '' && this.email != '' && this.password != '' && this.user_type != ''){
          await axios.post('http://localhost:3333/novo_usuario', {
            name: this.name,
            last_name: this.last_name,
            email: this.email, 
            password: this.password,
            user_type: this.user_type
          }).then(response => {
            this.user = response.data
            return this.user
          })

          document.getElementById('confirmLoginUserType').style.display = 'flex'
          this.scrollTop();
        }
      }, 
        scrollTop: function(){
        window.scrollTo(0, 0);
      },
        addUserType: function(){
          switch(this.user_type){
            case "Medico":
              axios.post(`http://localhost:3333/medicos`, {
              user_type: this.user_type,
              user_email: this.email,
              crm: this.crm,
              speciality: this.speciality
              }).then(response => {this.userType = response.data; return this.userType
              })
              alert("Usuário criado. Faça seu login")
              this.$router.push({name: 'acesso'})
              break;
            case "Funcionario":
              axios.post(`http://localhost:3333/funcionarios`, {
              user_type: this.user_type,
              user_email: this.email,
              register: this.register}).then(response => {this.userType = response.data; return this.userType
              })
              alert("Usuário criado. Faça seu login")
              this.$router.push({name: 'acesso'})
              break;
            case "Paciente":
              axios.post(`http://localhost:3333/pacientes`, {
              user_type: this.user_type,
              user_email: this.email,
              chart: this.chart}).then(response => {this.userType = response.data; return this.userType
          })
            alert("Usuário criado. Faça seu login")
            this.$router.push({name: 'acesso'})
            break;
            default:
              alert("Algo deu errado!");
              this.delUser();
              this.$router.push({name: 'acesso'});
          }
      }, 
        delUser: function(){
          try{
            axios.delete(`http://localhost:3333/usuarios/${this.email}`)
            console.log("Usuário não cadastrado/deletado!")
          } catch(e){
            return ("Retornando à página de acesso!")
          }
      }
    }
}
</script>

<style scoped>
  .createUser{
      text-align: center;
      min-height: 105vh;
      margin-top:  90px;
      margin-bottom: 80px;
  }

  .createUser h3, h2{
      color: #4e8ed8;
  }

  .formCreate{
    width: 400px;
    height: 750px;
    margin: auto;
  }

    .nav-link{
        text-decoration: none;
        color: #b1ae08;
    }

    .v-btn{
      margin-top: 20px;
    }

    #confirmLoginUserType{
      width: 100%;
      height: 100%;
      display: none;
      justify-content: center;
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      background-color: rgb(48, 48, 48, 0.9);
    }

    .confirmBox{
      background-color: #ffffff;
      margin: 200px;
      width: 500px;
      height: 200px;
      border-radius: 2%;
    }

    .confirmBox h2{
      margin-top: 50px;
    }
</style>