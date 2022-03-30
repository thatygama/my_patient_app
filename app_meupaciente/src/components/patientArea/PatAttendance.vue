<template>
    <div class="patDashboard">
        <main>
            <AsideDashboard/>
            <div class="titleAttendance">
                <h2>Atendimentos do Paciente</h2>
                    <CardSearch/>
            </div>

        </main>
    </div>
</template>

<script>
import AsideDashboard from '../partials/AsideDashboard.vue';
import CardSearch from '../partials/CardSearch.vue';

export default {
  name: 'PatAttendance',
  components: { AsideDashboard, CardSearch},
    data() {
        return {
            chart: '',
            email: '',
            atendimentos: {}
        };
    },
    methods: {
        //
    },
    mounted(){
        let jwt = localStorage.getItem('jwt')
        if(jwt == '' || typeof jwt == 'undefined' || jwt == 'null'){
            this.$router.push({name: 'acesso'})
        }
    }
};
</script>

<style scoped>
    .patDashboard{
        min-height: 100%;
        width: 1000px;
    }

    main{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .titleAttendance{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .titleAttendance h2{
        text-align: center;
    }

</style>
