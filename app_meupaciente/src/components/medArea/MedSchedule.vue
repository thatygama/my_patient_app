<template>
    <div class="docDashboard">
        <main>
            <AsideDashboard/>
            <div class="titleSchedule" v-if="$route.meta.CreateScheduleDoc">
                <h2>Novo Agendamento</h2>
                <FormSchedule/>
            </div>
            <div class="titleSchedule" v-if="$route.meta.UpdateScheduleDoc">
                <h2>Editar Agendamento</h2>
                <FormSchedule/>
            </div>
            <div class="titleSchedule" v-if="$route.meta.DoneScheduleDoc">
                <h2>Meus Agendamentos</h2>
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
  name: 'MedSchedule',
  components: { AsideDashboard, CardSearch, FormSchedule },
    data() {
        return {
            //
        };
    },
    methods: {
        
    },
    mounted: function(){
        let jwt = localStorage.getItem('jwt')

        if(jwt == '' || typeof jwt == 'undefined' || jwt == null){
            this.$router.push({name: 'acesso'})
        }
    }
};
</script>

<style scoped>
    .docDashboard{
        min-height: 100%;
    }

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
