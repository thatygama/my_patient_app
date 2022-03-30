<template>
  <div class="contactPage">
    <v-card
    class="mx-auto"
    max-width="400"
    tile
  >

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="title">E-mail</v-list-item-title>
        <v-list-item-subtitle class="subtitle">email_meupaciente@teste.com</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="title">Telefones</v-list-item-title>
        <v-list-item-subtitle class="subtitle">
          (x0) 9xx0x-39x0
        </v-list-item-subtitle>
        <v-list-item-subtitle class="subtitle">
          (x1) 9xx1x-39x1
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="title">Redes Sociais</v-list-item-title>
        <v-list-item-subtitle class="subtitle">
          Instagram
        </v-list-item-subtitle>
        <v-list-item-subtitle class="subtitle">
          Facebook
        </v-list-item-subtitle>
        <v-list-item-subtitle class="subtitle">
          LinkedIn
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data: () => ({
    //
  })
}
</script>

<style scoped>
  .contactPage{
    height: 70vh;
    margin-top: 130px;
    overflow: hidden;
  }

  .title{
    color: #4e8ed8;
  }
  
  .subtitle{
    margin-top: 5px;
    margin-left: 10px;
  }
</style>
