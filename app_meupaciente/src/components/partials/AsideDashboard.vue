<template>
    <div class="aside">
          <v-card
    class="mx-auto"
    width="350px"
    height="800px"
  >
    <v-list>
      <UserAside/>
  <hr/>
  <div class="options">
      <v-list-item class="homeButton" >
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title type="button" @click="doneSch">
            Início
          </v-list-item-title>
      </v-list-item>


        <v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                Agendamentos
                </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(info, index) in schedules"
            :key="index"
            link
          >
            <div v-if="info.title == 'Agendados'">
                <v-list-item-title v-text="info.title" @click="doneSch">
                </v-list-item-title>

                <!-- <v-list-item-icon>
                  <v-icon v-text="info.icon"></v-icon>
                </v-list-item-icon> -->
            </div>

            <div v-if="info.title == 'Novo'">
                <v-list-item-title v-text="info.title" @click="newSch"></v-list-item-title>

                <!-- <v-list-item-icon>
                  <v-icon v-text="info.icon"></v-icon>
                </v-list-item-icon> -->
            </div>
      
            </v-list-item>
          </v-list-group>


        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Atendimentos</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(info, index) in attendance"
            :key="index"
            link
          >
          <div v-if="info.title == 'Atendimentos Realizados'">
                <v-list-item-title v-text="info.title" @click="doneAtt"></v-list-item-title>

                <!-- <v-list-item-icon>
                  <v-icon v-text="info.icon"></v-icon>
                </v-list-item-icon> -->
          </div>

          <div v-if="!$route.meta.Paciente">
            <div v-if="info.title == 'Novo'" class="hover">
                <v-list-item-title v-text="info.title" @click="newAtt"></v-list-item-title>

                <!-- <v-list-item-icon>
                  <v-icon v-text="info.icon"></v-icon>
                </v-list-item-icon> -->
            </div>
          </div>
          </v-list-item>
        </v-list-group>
        </div>
    </v-list>
  </v-card>
    </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import UserAside from './UserAside.vue';

export default({
    name: 'AsideDashboard',
    components: {UserAside},
    icons: {
        iconfont: 'fa'
    },
    data: () => ({
        schedules: [{title: 'Agendados', icon:'fas fa-edit'}, {title: 'Novo', icon:'mdi-arrow-up-bold-box-outline'}],
        attendance: [{title: 'Atendimentos Realizados', icon:'fas fa-edit'}, {title: 'Novo', icon:'mdi-arrow-up-bold-box-outline'}],
        user_type: ''
    
    }
  ),
  mounted: function(){
    this.user_type = JSON.stringify(localStorage.getItem('user_type')).replace(/"/g, '').toLowerCase();  
  },
  methods: {
    newSch: function(){
      this.$router.push({path: `/acesso/usuario/${this.user_type}/novo_agendamento`})
    },
    newAtt: function(){
      this.$router.push({path: `/acesso/usuario/${this.user_type}/novo_atendimento`})
    },
    doneSch: function(){
      this.$router.push({path: `/acesso/usuario/${this.user_type}/agendamentos`})
    },
    doneAtt: function(){
      this.$router.push({path: `/acesso/usuario/${this.user_type}/atendimentos`})
    }
  }
})
</script>

<style scoped>
  a{
    text-decoration: none;
    color: black;
  }

  template{
    position: absolute;
    z-index: 100;
  }

  .homeButton:hover{
    background-color: rgba(204, 204, 204, 0.2);
  }
  .options{
    margin-left: 20px;
  }
  .nav-link{
    margin-bottom: 20px;
    padding-right: 20px;
  }
  .v-list-item__icon{
    padding-left: 16px;
  }
  .v-application p{
    margin-bottom: 0;
  }
</style>
