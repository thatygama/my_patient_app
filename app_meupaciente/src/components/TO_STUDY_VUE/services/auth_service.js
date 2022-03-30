import axios from 'axios';

const API_URL = 'http://localhost:3333/';

export default class APIService{

    async login(user) {
      await axios
      .post(API_URL + 'login', {
        email: user.email, 
        password: user.password,
        user_type: user.user_type
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        console.log(response.data)
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  registerUser(user) {
    axios.post(API_URL + 'novo_usuario', {
        name: user.name,
        last_name: user.last_name,
        email: user.email, 
        password: user.password,
        user_type: user.user_type
    }).then(response => {
      user = response.data
      console.log(user);
      return user
    })
  }

  // getUser() {
  //   axios.get('http://localhost:3333/usuarios/:id')
  //           .then(response => {
  //               this.user = response.data
  //               console.log(this.user);
  //               return this.user
  //           })
  // }


  registerUserMedico(medico, user) {
  axios.post(API_URL + medico.user_type.toLowerCase()+'s', {
        user_type: user.user_type,
        user_email: user.email,
        crm: medico.crm,
        speciality: medico.speciality.toLowerCase(),
    }).then(response => {
      medico.userType = response.data
      console.log(medico.userType);
      return medico.userType
    })
  }

  registerUserPaciente(paciente, user) {
    axios.post(API_URL + paciente.user_type.toLowerCase()+'s', {
          user_type: paciente.user_type,
          user_email: user.email,          
          chart: paciente.chart
      }).then(response => {
        paciente.userType = response.data
        console.log(paciente.userType);
        return paciente.userType
      })
    }

    registerUserFuncionario(funcionario, user) {
      axios.post(API_URL + funcionario.user_type.toLowerCase()+'s', {
            user_type: funcionario.user_type,
            user_email: user.email, 
            register: funcionario.register
        }).then(response => {
          funcionario.userType = response.data
          console.log(funcionario.userType);
          return funcionario.userType
        })
      }
}
    
