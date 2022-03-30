<template>
    <div class="schedule">
        <div class="form">
            <form>
                <div v-if="!$route.meta.Paciente">
                    <v-text-field v-model="patient_chart"  label="Prontuário do Paciente" required :rules="[v => !!v || 'Preenchimento obrigatório!']">
                    </v-text-field>
                </div>

                <div v-if="!$route.meta.Medico">
                    <v-text-field v-model="doctor_crm" label="CRM do Médico" required :rules="[v => !!v || 'Preenchimento obrigatório!']" >
                    </v-text-field>
                </div>

                <v-text-field v-model="date" label="Data" placeholder="(ex.: 07/03/2022)" required maxlength="10" minlength="10" :rules="[v => !!v || 'Preenchimento obrigatório!']">
                </v-text-field>

                <v-text-field v-model="hour" label="Hora" placeholder="(ex.: 14:30)" required maxlength="5" minlength="5" :rules="[v => !!v || 'Preenchimento obrigatório!']">
                </v-text-field>

                <v-col
                cols="20"
                sm="40"
                >
                <v-textarea v-model="description" label="Descrição de Caso" auto-grow outlined rows="3" row-height="25" haped>
                </v-textarea>
                </v-col>

                <v-col cols="20" sm="40">
                    <v-textarea v-model="note" label="Observações" auto-grow outlined rows="3" row-height="25" shaped>
                    </v-textarea>
                </v-col>

                <v-btn class="mr-4">

                <div class="titleSchedule">
                    <div v-if="$route.meta.CreateScheduleDoc || $route.meta.CreateSchedulePat || $route.meta.CreateScheduleEmp" v-on:click.once="addSchedule">
                        Registrar
                    </div>

                    <div v-else-if="$route.meta.UpdateScheduleDoc || $route.meta.UpdateSchedulePat || $route.meta.UpdateScheduleEmp " v-on:click.once="updSchedule">
                        Atualizar
                    </div>

                </div>
                </v-btn>

                <v-btn @click="cancel">
                    Cancelar
                </v-btn>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'FormSchedule',
    data: () => ({
        typeUser: [
        "Paciente", "Medico", "Funcionario"
    ],
        patient_chart: '',
        doctor_crm: '',
        numberRegister: '',
        modified_by_user_email: '',
        description: '',
        prescription: '',
        note: '',
        name: '',
        last_name: '',
        date: '',
        hour: '',
        agendamentos: {},
        id: '',
        user_type: '',
        email: ''
    }),
    methods: {
        addSchedule: function(){
            if(this.patient_chart != '' || this.doctor_crm != '' || this.date != '' || this.hour != ''){
            switch(this.user_type){
                case 'Medico':
                    axios.post('http://localhost:3333/agendamentos/', {
                    patient_chart: this.patient_chart,
                    doctor_crm: this.numberRegister,
                    modified_by_user_email: this.email,
                    description: this.description,
                    note: this.note,
                    date: this.date,
                    hour: this.hour
                }).then(response => {
                    return response.data
                })
                window.scrollTo({top: 0, behavior: 'smooth'})
                this.$router.push({path: `/acesso/usuario/${this.user_type.toLowerCase()}/agendamentos`})
                break;
                case 'Paciente':
                    axios.post('http://localhost:3333/agendamentos/', {
                    patient_chart: this.numberRegister,
                    doctor_crm: this.doctor_crm,
                    modified_by_user_email: this.email,
                    description: this.description,
                    note: this.note,
                    date: this.date,
                    hour: this.hour
                }).then(response => {
                    return response.data
                })
                window.scrollTo({top: 0, behavior: 'smooth'})
                this.$router.push({path: `/acesso/usuario/${this.user_type.toLowerCase()}/agendamentos`})
                break;
                case 'Funcionario':
                axios.post('http://localhost:3333/agendamentos/', {
                    patient_chart: this.patient_chart,
                    doctor_crm: this.doctor_crm,
                    modified_by_user_email: this.email,
                    description: this.description,
                    note: this.note,
                    date: this.date,
                    hour: this.hour
                }).then(response => {
                    return response.data
                })
                window.scrollTo({top: 0, behavior: 'smooth'})
                this.$router.push({path: `/acesso/usuario/${this.user_type.toLowerCase()}/agendamentos`})
                break;
                default:
                break;
            }
                alert('Agendamento realizado!')
            } else{
                alert('Preencha as informações obrigatórias!')
            }
        },
        updSchedule: function(){
            if(this.patient_chart != '' || this.doctor_crm != '' || this.date != '' || this.hour != ''){
                switch(this.user_type){
                case 'Medico':
                    axios.put(`http://localhost:3333/agendamentos/${this.id}`, {
                    patient_chart: this.patient_chart,
                    doctor_crm: this.numberRegister,
                    modified_by_user_email: this.email,
                    description: this.description,
                    note: this.note,
                    date: this.date,
                    hour: this.hour
                    }).then(response => {
                    return response.data
                    })
                    window.scrollTo({top: 0, behavior: 'smooth'})
                    this.$router.push({path: `/acesso/usuario/${this.user_type.toLowerCase()}/agendamentos`})
                    break;
                case 'Paciente':
                    axios.put(`http://localhost:3333/agendamentos/${this.id}`, {
                    patient_chart: this.numberRegister,
                    doctor_crm: this.doctor_crm,
                    modified_by_user_email: this.email,
                    description: this.description,
                    note: this.note,
                    date: this.date,
                    hour: this.hour
                    }).then(response => {
                    return response.data
                    })
                    window.scrollTo({top: 0, behavior: 'smooth'})
                    this.$router.push({path: `/acesso/usuario/${this.user_type.toLowerCase()}/agendamentos`})
                    break;
                case 'Funcionario':
                axios.put(`http://localhost:3333/agendamentos/${this.id}`, {
                    patient_chart: this.patient_chart,
                    doctor_crm: this.doctor_crm,
                    modified_by_user_email: this.email,
                    description: this.description,
                    note: this.note,
                    date: this.date,
                    hour: this.hour
                    }).then(response => {
                    return response.data
                    })
                    window.scrollTo({top: 0, behavior: 'smooth'})
                    this.$router.push({path: `/acesso/usuario/${this.user_type.toLowerCase()}/agendamentos`})
                    break;
                default:
                    break;
            }
                alert('Edição de agendamento realizada!')
            } else{
                alert('Preencha as informações obrigatórias!')
            }
        },
        cancel: function(){
            localStorage.removeItem('id');
            window.scrollTo({top: 0, behavior: 'smooth'})
            this.$router.push({path: `/acesso/usuario/${this.user_type.toLowerCase()}/agendamentos`})
        }
    },
    mounted: function() {
        this.user_type = JSON.stringify(localStorage.getItem('user_type')).replace(/"/g, '')
        if(this.user_type == 'Medico'){
            this.crm = JSON.stringify(localStorage.getItem('crm')).replace(/"/g, '')
            this.numberRegister = this.crm
        } else if(this.user_type == 'Paciente'){
            this.chart = JSON.stringify(localStorage.getItem('chart')).replace(/"/g, '')
            this.numberRegister = this.chart
        }
    
        this.email = JSON.stringify(localStorage.getItem('email')).replace(/"/g, '');
        this.id = JSON.stringify(localStorage.getItem('id')).replace(/"/g, '');
        if(this.id == '' || typeof this.id == 'undefined' || this.id == null){
            window.scrollTo({top: 0, behavior: 'smooth'})
            this.$router.push({path: `/acesso/usuario/${this.user_type}/agendamentos`})
        }
    }
}
</script>

<style scoped>
    .schedule{
        text-align: center;
        margin-top: 30px;
        margin-bottom: 50px;
        width: 500px;
    }

    .form{
        display: flex;
        justify-content: center;
    }

    form{
        width: 350px;
    }

    .v-textarea{
        padding-top: 10px;
    }
</style>
