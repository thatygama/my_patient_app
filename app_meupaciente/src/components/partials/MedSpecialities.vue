<template>
  <div class="features">
    <div class="cardVuetify" v-for="(info, index) in contentList" :key =index>
        
        <v-card
        class="mx-auto my-12 specialityBox"
        max-width="374"
    >
            <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
            </template>

            <v-img
            :src="`https://picsum.photos/500/300?image=${info.img}`"
            aspect-ratio="1"
            class="grey lighten-2"
            />

            <v-card-title class="nameSpeciality">{{info.speciality.toUpperCase()}}</v-card-title>

            <v-card-text>
                <div class="infoContent">{{info.content}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title class="avaluable">Disponibilidade</v-card-title>

            <v-card-text>
            <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
            >
                <div v-for="hours in info.avaluable" :key="hours">
                <v-chip>{{hours}}</v-chip>
                </div>

            </v-chip-group>
            </v-card-text>

            <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
            >
            <router-link class="nav-link" to="/acesso">RESERVAR</router-link>
            </v-btn>
            </v-card-actions>
        </v-card>
    </div>

</div>
</template>

<script>
export default {
  name: 'MedSpecialities',
  data: () => ({
    contentList: [
        {speciality: 'Dermatologia', img: 10, avaluable: ['14:00', '15:00', '16:00'], content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper. Velit aliquet sagittis id consectetur. '},
        {speciality: 'Clínica Médica', img: 50, avaluable: ['13:00', '14:00', '18:00'], content:'Velit aliquet sagittis id consectetur. Aliquam eleifend mi in nulla posuere.'},
        {speciality: 'Cirurgia Geral', img: 60, avaluable: ['18:00'], content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper. Velit aliquet sagittis id consectetur. Aliquam eleifend mi in nulla posuere.'},
        {speciality: 'Endocrinologia', img: 70, avaluable: ['15:00', '16:00'], content:'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper. Velit aliquet sagittis id consectetur. Aliquam eleifend mi in nulla posuere.'},
        {speciality: 'Ginecologia e Obstetrícia', img: 80, avaluable: ['15:00'], content:'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper. Velit aliquet sagittis id consectetur. Aliquam eleifend mi in nulla posuere.'},
        {speciality: 'Nutrologia', img: 90, avaluable: ['14:00', '15:00', '16:00'], content:'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper. Velit aliquet sagittis id consectetur. Aliquam eleifend mi in nulla posuere.'}
    ]
  })
}
</script>

<style scoped>
    .features{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }

    .nameSpeciality{
        font-size: 20px;
        color: #4e8ed8;
    }

    .infoContent{
        margin-top: 5px;
    }

    .avaluable{
        font-size: 16px;
    }

    .nav-link{
        text-decoration: none;
    }
</style>
