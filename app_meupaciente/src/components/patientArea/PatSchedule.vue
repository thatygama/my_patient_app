<template>
    <div class="patDashboard">
        <main>
            <AsideDashboard/>
            <div class="titleSchedule" v-if="$route.meta.CreateSchedulePat">
                <h2>Novo Agendamento do Paciente</h2>
                <FormSchedule/>
            </div>
            <div class="titleSchedule" v-if="$route.meta.UpdateSchedulePat">
                <h2>Editar Agendamento do Paciente</h2>
                <FormSchedule/>
            </div>
            <div class="titleSchedule" v-if="$route.meta.DoneSchedulePat">
                <h2>Agendamentos do Paciente</h2>
                <CardSearch/>
            </div>

        </main>
    </div>
</template>

<script>
import AsideDashboard from '../partials/AsideDashboard.vue';
import CardSearch from '../partials/CardSearch.vue';
import FormSchedule from '../partials/FormSchedule.vue';

export default {
  name: 'PatSchedule',
  components: { AsideDashboard, CardSearch, FormSchedule },
    data() {
        return {
            agendamentos: {},
            idAgendamentos: '',
            chart: ''
        };
    },
    mounted: function(){
        let jwt = localStorage.getItem('jwt')
        if(jwt == '' || typeof jwt == 'undefined' || jwt == 'null'){
            this.$router.push({name: 'acesso'})
        }
    }
}
</script>

<style scoped>
    main{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .titleSchedule{
        margin-top: 30px;
    }
    .titleSchedule h2{
        text-align: center;
    }
</style>
