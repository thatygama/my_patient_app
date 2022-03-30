<template>
  <div class="appScreen">
    <v-app>
      <div v-if="$route.meta.MainLayout">
        <div class="app-header">
          <HeaderApp/>
        </div>
        <div class="app-content">
          <router-view/>
        </div>
        <div class="app-footer">
          <FooterApp/>
        </div>
      </div>

      <div v-else>
        <div class="app-header">
          <HeaderDashboard/>
        </div>
        <div class="app-content">
          <router-view/>
        </div>
        <div class="app-footer">
          <FooterDashboard/>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import HeaderApp from './components/partials/HeaderApp.vue';
import FooterApp from './components/partials/FooterApp.vue';
import HeaderDashboard from './components/partials/HeaderDashboard.vue';
import FooterDashboard from './components/partials/FooterDashboard.vue';

export default{
  name: 'App',
  components: {
    HeaderApp,
    FooterApp,
    HeaderDashboard,
    FooterDashboard
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
  html {
    scroll-behavior: smooth;
  }
  .app-content{
    width: 100vw;
    margin-top: 60px;
  }

  .app-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }
</style>