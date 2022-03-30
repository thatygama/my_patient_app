<template>
    <div class="footerApp">
        
        <v-footer
            dark
            padless
        >
            <v-card
            class="flex"
            flat
            tile
            >
            <!-- <v-card-title class="teal">
                <strong class="subheading">Conecte-se conosco nas nossas Redes Sociais!</strong>

                <v-spacer></v-spacer>

                <v-btn
                v-for="(icon, index) in icons"
                :key="index"
                class="mx-4"
                icon
                >
                <v-icon>
                    iconSpace
                </v-icon>
                </v-btn>
            </v-card-title> -->

            <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }} — <strong>MEUPaciente</strong>
            </v-card-text>
            </v-card>
        </v-footer>

    </div>
</template>

<script>
export default {
  name: 'FooterApp',
  data: () => ({
    icons: [
        {address: ''},
        {address: ''},
        {address: ''},
        {address: ''}
    ]
  })
}
</script>

<style scoped>

    .footerApp{
        width: 100vw;
        margin-top: 30px;
        position: absolute;
        bottom: 0;
        opacity: 0.9;
    }

    .subheading{
        padding-left: 30px;
    }

    .py-2{
        background-color: #106cd4;
    }

</style>
