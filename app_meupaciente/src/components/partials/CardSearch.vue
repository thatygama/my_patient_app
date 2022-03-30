<template>
    <div class="cards">
        <div v-if="$route.meta.DoneSchedulePat || $route.meta.DoneScheduleDoc">
        <div class="card" v-for="(item, index) in agendamentos" :key=index >
            <p class="chart">
                <strong>Prontuário do Paciente:</strong> {{item.patient_chart}}
            </p>
            <p class="crm">
                <strong>CRM do Médico:</strong> {{item.doctor_crm}}
            </p>
            <p class="date">
                <strong>Data:</strong> {{item.date}}
            </p>
            <p class="hour">
                <strong>Hora:</strong> {{item.hour}}
            </p>
            <div class="description" v-if="item.description != null && item.description != ''">
                <strong>Descrição:</strong> {{item.description}}
            </div>
            <div class="note" v-if="item.note != null && item.note != ''">
                <strong>Observações:</strong> {{item.note}}
            </div>
            <p class="modificated_by_user_email">
                <strong>Última alteração realizada por:</strong> {{item.modified_by_user_email}}
            </p>
            
            <v-btn v-on:click="setSchID" v-model="id" :value="item.id">
                Editar
            </v-btn>
        </div>
        </div>

        <div v-if="$route.meta.DoneAttendancePat || $route.meta.DoneAttendanceDoc">
        <div class="card" v-for="(item, index) in atendimentos" :key=index > 
            <p class="chart">
                <strong>Prontuário do Paciente:</strong> {{item.patient_chart}}
            </p>
            <p class="crm">
                <strong>CRM do Médico:</strong> {{item.doctor_crm}}
            </p>
            <p class="date">
                <strong>Data:</strong> {{item.date}}
            </p>
            <p class="hour">
                <strong>Hora:</strong> {{item.hour}}
            </p>
            <div class="description" v-if="item.prescription != null && item.prescription != ''">
                <strong>Descrição:</strong> {{item.prescription}}
            </div>
            <div class="note" v-if="item.note != null && item.note != ''">
                <strong>Observações:</strong> {{item.note}}
            </div>
            <p class="modificated_by_user_email">
                <strong>Última alteração realizada por:</strong> {{item.modified_by_user_email}}
            </p>

            <div v-if="!$route.meta.Paciente">
            <v-btn v-on:click="setAttID" v-model="id" :value="item.id">
                    Editar
            </v-btn>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name: 'CardSearch',
    data(){
        return {
            atendimentos: [],
            agendamentos: [],
            id: '',
            user_email: '',
            numberRegister: '',
            user_type: '',
            crm: '',
            chart: ''
        }
    },
    mounted() {
        try {
            this.user_type = JSON.stringify(localStorage.getItem('user_type')).replace(/"/g, '')

            if(this.user_type == 'Medico'){
                this.crm = JSON.stringify(localStorage.getItem('crm')).replace(/"/g, '')
                this.numberRegister = this.crm
            } else if(this.user_type == 'Paciente'){
                this.chart = JSON.stringify(localStorage.getItem('chart')).replace(/"/g, '')
                this.numberRegister = this.chart
            }
            
            axios.get(`http://localhost:3333/${this.user_type.toLowerCase()}/atendimentos/${this.numberRegister}`)
                .then(response => {
            this.atendimentos = response.data
            return this.atendimentos
          });
            axios.get(`http://localhost:3333/${this.user_type.toLowerCase()}/agendamentos/${this.numberRegister}`)
                    .then(response => {
                this.agendamentos = response.data
                return this.agendamentos
          });
            } catch(e) {
            console.error(e);
            }
        }, 
        methods: {
            setSchID(e){
                localStorage.setItem('id', e.currentTarget.value);
                this.$router.push(`/acesso/usuario/${this.user_type.toLowerCase()}/editar_agendamento/${e.currentTarget.value}`)
                window.scrollTo({top: 0, behavior: 'smooth'})
            },
            setAttID(e){
                localStorage.setItem('id', e.currentTarget.value);
                this.$router.push({path: `/acesso/usuario/${this.user_type.toLowerCase()}/editar_atendimento/${e.currentTarget.value}`})
                window.scrollTo({top: 0, behavior: 'smooth'})
            }
        }
}
</script>

<style scoped>
    .cards{
        width: calc(100vw - 310px);
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content:center;
        margin-bottom: 100px;
        
    }

    .card{
        border: 1px solid rgb(204, 204, 204, 0.3);
        padding: 30px;
        margin: 10px;
        width: 300px;
        height: 300px;
    }

    .v-btn{
        margin-top: 15px;
        margin-left: 70px;
    }

    .returnZero{
        margin-top: 30px;
        color: #106cd4;
    }
</style>

