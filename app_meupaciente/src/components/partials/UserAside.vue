<template>
    <div class="userAside">
        <div class="user">
          <div class="photoUser">
            <v-avatar size="56">
            <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
            >
            </v-avatar>
          </div>
          <div class="userDescrip">
            <h4>
            <strong>{{nome}} {{' '+ sobrenome}}</strong>
            </h4>
            <p>{{user_type}}</p>
            <p>{{speciality}}</p>
            <p>{{numberRegister}}</p>
          </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default({
    name: 'UserAside',
    icons: {
        //
    },
    data: () => ({
        email: '',
        nome: '',
        sobrenome: '',
        user_type: '',
        speciality: '',
        numberRegister: ''
    }),
    mounted: function(){
      this.email = JSON.stringify(localStorage.getItem('email')).replace(/"/g, '');
      axios.get(`http://localhost:3333/usuarios/${this.email}`)
        .then(response => {
            this.nome = response.data.name,
            this.sobrenome = response.data.last_name
        })

      this.user_type = JSON.stringify(localStorage.getItem('user_type')).replace(/"/g, '');
      switch(this.user_type){
        case 'Medico':
          axios.get(`http://localhost:3333/medicos/${this.email}`)
          .then(response => {
              this.numberRegister = response.data.crm,
              this.user_type = response.data.user_type,
              this.speciality = response.data.speciality
              localStorage.setItem('crm', this.numberRegister)
          });
          break;
        case 'Funcionario':
          axios.get(`http://localhost:3333/funcionarios/${this.email}`)
          .then(response => {
              this.numberRegister = response.data.register,
              this.user_type = response.data.user_type
          });
          break;
        case 'Paciente':
          axios.get(`http://localhost:3333/pacientes/${this.email}`)
          .then(response => {
              this.numberRegister = response.data.chart,
              this.user_type = response.data.user_type
              localStorage.setItem('chart', this.numberRegister)
          });
          break;
      }
            
    }
})
</script>

<style scoped>
  .user{
    display: flex;
    flex-direction: row;
    margin-left: 40px;
  }

  .photoUser{
    display: flex;
    flex-direction: row;
    margin: 10px 5px 0px 20px;
  }

  .userDescrip{
    display: flex;
    flex-direction: column;
    margin: 20px 5px 20px 20px;
  }

  .userDescrip h4{
    font-size: 15px;
  }

  .userDescrip p{
    font-size: 12px;
    margin: 0 0 3px 6px;
  }
</style>
