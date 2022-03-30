<template>
    <div class="empDashboard">
        <main>
            <AsideDashboard/>
            <div class="titleSchedule" v-if="$route.meta.CreateScheduleEmp">
                <h2>Novo Agendamento</h2>
                <FormSchedule/>
            </div>
            <div class="titleSchedule" v-if="$route.meta.UpdateScheduleEmp">
                <h2>Editar Agendamento</h2>
                <FormSchedule/>
            </div>
            <div class="titleSchedule" v-if="$route.meta.DoneScheduleEmp">
                <h2>Agendamentos</h2>
                <CardDashboard/>
            </div>

        </main>
    </div>
</template>

<script>
import AsideDashboard from '../partials/AsideDashboard.vue';
import CardDashboard from '../partials/CardDashboard.vue';
import FormSchedule from '../partials/FormSchedule.vue';

export default {
  name: 'EmpSchedule',
  components: { AsideDashboard, CardDashboard, FormSchedule },
    data() {
        return {
        };
    },
    mounted: function(){
        let jwt = localStorage.getItem('jwt')

        if(jwt == '' || typeof jwt == 'undefined' || jwt == 'null' ){
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
