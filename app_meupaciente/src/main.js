/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import MedicalCare from './components/MedicalCare';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import CreateUser from './components/CreateUser';

import MedSchedule from './components/medArea/MedSchedule';
import MedAttendance from './components/medArea/MedAttendance';
import PatSchedule from './components/patientArea/PatSchedule';
import PatAttendance from './components/patientArea/PatAttendance';
import EmpSchedule from './components/empArea/EmpSchedule';
import EmpAttendance from './components/empArea/EmpAttendance';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex);
const store = new Vuex.Store(
  {
    state:{
      authenticated: false
    },
    mutations: {
      setAuthentication(state, status){
        state.authenticated = status;
      }
    }
  }
)


Vue.use(vuetify, {
  theme: {
     primary: '#4e8ed8',
  },
});

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'homePage',
      meta: {
        MainLayout: true
      }
    },
    {
      path: '/atendimentos_medicos',
      component: MedicalCare,
      meta: {
        MainLayout: true
      }
    },
    {
      path: '/contato',
      component: ContactPage,
      meta: {
        MainLayout: true
      }
    },
    {
      path: '',
      redirect: {
        name: "homePage"
      }
    },
    {
      path: '/acesso',
      component: LoginPage,
      name: 'acesso',
      meta: {
        MainLayout: true,
        LoginPages: true
      }
    },
    {
      path: '/novo_usuario',
      component: CreateUser,
      meta: {
        MainLayout: true,
        LoginPages: true
      }
    },
    {
      path: '/acesso/usuario/medico',
      component: MedSchedule,
      name: "medico",
      meta: {
        Medico: true,
        DoneScheduleDoc: true
      }
    },
    {
      path: '/acesso/usuario/medico/agendamentos',
      component: MedSchedule,
      meta: {
        Medico: true,
        DoneScheduleDoc: true
      }
    },
    {
      path: '/acesso/usuario/medico/novo_agendamento',
      component: MedSchedule,
      meta: {
        Medico: true,
        CreateScheduleDoc: true
      }
    },
    {
      path: '/acesso/usuario/medico/editar_agendamento/:id',
      component: MedSchedule,
      meta: {
        Medico: true,
        UpdateScheduleDoc: true
      }
    },
    {
      path: '/acesso/usuario/medico/atendimentos',
      component: MedAttendance,
      meta: {
        Medico: true,
        DoneAttendanceDoc: true
      }
    },
    {
      path: '/acesso/usuario/medico/novo_atendimento',
      component: MedAttendance,
      meta: {
        Medico: true,
        CreateAttendanceDoc: true
      }
    },
    {
      path: '/acesso/usuario/medico/editar_atendimento/:id',
      component: MedAttendance,
      meta: {
        Medico: true,
        UpdateAttendanceDoc: true
      }
    },
    {
      path: '/acesso/usuario/paciente',
      component: PatSchedule,
      name: "paciente",
      meta: {
        Paciente: true,
        DoneSchedulePat: true
      }
    },
    {
      path: '/acesso/usuario/paciente/agendamentos',
      component: PatSchedule,
      meta: {
        Paciente: true,
        DoneSchedulePat: true
      }
    },
    {
      path: '/acesso/usuario/paciente/novo_agendamento',
      component: PatSchedule,
      meta: {
        Paciente: true,
        CreateSchedulePat: true
      }
    },
    {
      path: '/acesso/usuario/paciente/editar_agendamento/:id',
      component: PatSchedule,
      meta: {
        Paciente: true,
        UpdateSchedulePat: true
      }
    },
    {
      path: '/acesso/usuario/paciente/atendimentos',
      component: PatAttendance,
      meta: {
        Paciente: true,
        DoneAttendancePat: true
      }
    },
    {
      path: '/acesso/usuario/funcionario',
      component: EmpSchedule,
      name: "funcionario",
      meta: {
        Funcionario: true,
        DoneScheduleEmp: true
      }
    },
    {
      path: '/acesso/usuario/funcionario/agendamentos',
      component: EmpSchedule,
      meta: {
        Funcionario: true,
        DoneScheduleEmp: true
      }
    },
    {
      path: '/acesso/usuario/funcionario/novo_agendamento',
      component: EmpSchedule,
      meta: {
        Funcionario: true,
        CreateScheduleEmp: true
      }
    },
    {
      path: '/acesso/usuario/funcionario/editar_agendamento/:id',
      component: EmpSchedule,
      meta: {
        Funcionario: true,
        UpdateScheduleEmp: true
      }
    },
    {
      path: '/acesso/usuario/funcionario/atendimentos',
      component: EmpAttendance,
      meta: {
        Funcionario: true,
        DoneAttendanceEmp: true
      }
    },
    {
      path: '/acesso/usuario/funcionario/novo_atendimento',
      component: EmpAttendance,
      meta: {
        Funcionario: true,
        CreateAttendanceEmp: true
      }
    },
    {
      path: '/acesso/usuario/funcionario/editar_atendimento/:id',
      component: EmpAttendance,
      meta: {
        Funcionario: true,
        UpdateAttendanceEmp: true
      }
    },
    {
      path: '*',
      component: NotFound,
      meta: {
        MainLayout: true
      }
    },
  ]
});


new Vue({
  router,
  vuetify,
  render: h => h(App),
  store
}).$mount('#app')
