<template>
    <div class="medDashboard">
        <main>
            <AsideDashboard/>
            <div class="titleSchedule" v-if="$route.meta.CreateAttendanceDoc">
                <h2>Novo Atendimento</h2>
                <FormAttendance/>
            </div>
            <div class="titleSchedule" v-if="$route.meta.UpdateAttendanceDoc">
                <h2>Editar Atendimento</h2>
                <FormAttendance/>
            </div>
            <div class="titleSchedule" v-if="$route.meta.DoneAttendanceDoc">
                <h2>Meus Atendimentos</h2>
                <CardSearch/>
            </div>

        </main>
    </div>
</template>

<script>
import AsideDashboard from '../partials/AsideDashboard.vue';
import CardSearch from '../partials/CardSearch.vue';
import FormAttendance from '../partials/FormAttendance.vue';

export default {
  name: 'MedAttendance',
  components: { AsideDashboard, CardSearch, FormAttendance },
    data() {
        return {
            //
        };
    },
    methods: {
        //
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
    .medDashboard{
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
