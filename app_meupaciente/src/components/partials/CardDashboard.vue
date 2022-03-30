<template>
    <div class="cards">
        <div v-if="$route.meta.DoneScheduleDoc || $route.meta.DoneScheduleEmp || $route.meta.DoneSchedulePat || $route.meta.UpdScheduleDoc || $route.meta.UpdScheduleEmp || $route.meta.UpdSchedulePat">
            <div class="card" v-for="(info,index) in agendamentos" :key=index>
                
                <p class="chart">
                    <strong>Prontuário do Paciente:</strong> {{info.patient_chart}}
                </p>
                <p class="crm">
                    <strong>CRM do Médico:</strong> {{info.doctor_crm}}
                </p>
                <div class="description" v-if="info.description != null && info.description != ''">
                    <strong>Descrição:</strong> {{info.description}}
                </div>
                <div class="note" v-if="info.note != null && info.note != ''">
                    <strong>Observações:</strong> {{info.note}}
                </div>
                <p class="modificated_by_user_email">
                    <strong>Última alteração realizada por:</strong> {{info.modified_by_user_email}}
                </p>
                
                <v-btn v-on:click="setSchID" v-model="id" :value="info.id">
                    Editar
                </v-btn>
                </div>
        </div>

        <div v-if="$route.meta.DoneAttendanceDoc || $route.meta.DoneAttendanceEmp">
            <div class="card" v-for="(info,index) in atendimentos" :key=index>
            
            <div v-if="index >= 0">
                <p class="chart">
                    <strong>Prontuário do Paciente:</strong> {{info.patient_chart}}
                </p>
                <p class="crm">
                    <strong>CRM do Médico:</strong> {{info.doctor_crm}}
                </p>
                <div class="description" v-if="info.prescription != null && info.prescription != ''">
                    <strong>Descrição:</strong> {{info.prescription}}
                </div>
                <div class="note" v-if="info.note != null && info.note != ''">
                    <strong>Observações:</strong> {{info.note}}
                </div>
                <p class="modificated_by_user_email">
                    <strong>Última alteração realizada por:</strong> {{info.modified_by_user_email}}
                </p>

                <v-btn v-on:click="setAttID" v-model="id" :value="info.id">
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
    name: 'CardDashboard',
    data(){
        return {
            atendimentos: {},
            agendamentos: {},
            id: '',
            user_email: '',
            name: '',
            last_name: '',
            user_type: ''
        }
    }, 
    methods: {
            setSchID(e){
                localStorage.setItem('id', e.currentTarget.value);
                this.$router.push({path: `/acesso/usuario/${this.user_type.toLowerCase()}/editar_agendamento/${e.currentTarget.value}`})
            },
            setAttID(e){
                localStorage.setItem('id', e.currentTarget.value);
                this.$router.push({path: `/acesso/usuario/${this.user_type.toLowerCase()}/editar_atendimento/${e.currentTarget.value}`})
            }
    },
    mounted () {
        try {
            this.user_type = JSON.stringify(localStorage.getItem('user_type')).replace(/"/g, '')
            
            axios.get('http://localhost:3333/atendimentos')
            .then(resp => {
                this.atendimentos = resp.data
                return this.atendimentos
            })
            
            axios.get('http://localhost:3333/agendamentos')
            .then(resp => {
                this.agendamentos = resp.data
                return this.agendamentos
            })
            } catch(e) {
            console.error(e);
            }
        }
}
</script>

<style scoped>
    .cards{
        width: calc(100vw - 310px);
        display: flex;
        flex-wrap: wrap; 
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 100px;
    }

    .card{
        border: 1px solid rgb(204, 204, 204, 0.3);
        padding: 30px;
        margin: 10px;
        width: 300px;
    }

    .v-btn{
        margin-top: 15px;
        margin-left: 70px;
    }
</style>
