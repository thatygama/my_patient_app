import axios from 'axios';
import authHeader from '../services/auth_header';

const API_URL = 'http://localhost:3333/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getScheduleBoard() {
    return axios.get(API_URL + 'agendamentos', { headers: authHeader() });
  }  

  getAttendanceBoard() {
    return axios.get(API_URL + 'atendimentos', { headers: authHeader() });
  }  
  
  getDoctorBoard() {
    return axios.get(API_URL + 'medicos/:user_id', { headers: authHeader() });
  }

  getEmployeeBoard() {
    return axios.get(API_URL + 'funcionarios/:user_id', { headers: authHeader() });
  }

  getUserBoard() {
    return axios.get(API_URL + 'usuarios/:id', { headers: authHeader() });
  }

  // getAdminBoard() {
  //   return axios.get(API_URL + 'admin', { headers: authHeader() });
  // }
}
export default new UserService();