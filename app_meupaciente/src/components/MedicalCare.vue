<template>
  <div class="medicalCare">
    <h2>Preparados para os mais avançados Atendimentos Médicos!</h2>

    <MedSpecialities class="cards"/>
  </div>
</template>

<script>
import MedSpecialities from './partials/MedSpecialities.vue';

export default {
  name: 'MedicalCare',
  components: {
    MedSpecialities
  }
}
</script>

<style scoped>
  .medicalCare{
    text-align: center;
  }

  h2{
      margin-top:  100px;
      color: #4e8ed8;
    }

    .cards{
      margin-bottom: 100px
    }
</style>
