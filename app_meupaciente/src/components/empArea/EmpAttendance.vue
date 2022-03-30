<template>
    <div class="empDashboard">
        <main>
            <AsideDashboard/>
            <div class="titleSchedule" v-if="$route.meta.CreateAttendanceEmp">
                <h2>Novo Atendimento</h2>
                <FormAttendance/>
            </div>
            <div class="titleSchedule" v-if="$route.meta.UpdateAttendanceEmp">
                <h2>Editar Atendimento</h2>
                <FormAttendance/>
            </div>
            <div class="titleSchedule" v-if="$route.meta.DoneAttendanceEmp">
                <h2>Todos os Atendimentos</h2>
                <CardDashboard/>
            </div>

        </main>
    </div>
</template>

<script>
import AsideDashboard from '../partials/AsideDashboard.vue';
import CardDashboard from '../partials/CardDashboard.vue';
import FormAttendance from '../partials/FormAttendance.vue';

export default {
  name: 'EmpAttendance',
  components: { AsideDashboard, CardDashboard, FormAttendance },
    data() {
        return {
            //
        };
    },
    methods: {
        
    },
    mounted: function(){
        let jwt = localStorage.getItem('jwt')

        if(jwt == '' || typeof jwt == 'undefined' || jwt == 'null'){
            this.$router.push({name: 'acesso'})
        }
    }
};
</script>

<style scoped>
    .empDashboard{
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
