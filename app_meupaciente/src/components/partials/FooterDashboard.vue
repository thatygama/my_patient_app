<template>
    <div class="footerDashboard">
        <v-footer
            color="primary lighten-1"
            padless
        >
            <v-row
            justify="center"
            no-gutters
            >
            
                <router-link class="nav-link" to="/contato">
                    Contato
                </router-link>
            <v-col
                class="fontFooter primary lighten-2 py-0.5 text-center white--text"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>MEUPaciente</strong>
            </v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
export default({
    name: 'FooterDashboard',
    data: () => ({
        //
    }
  )
})
</script>

<style scoped>
    .footerDashboard{
    width: 100vw;
    margin-top: 30px;
    position: absolute;
    bottom: 0;
    opacity: 0.9;
}

    .nav-link{
        display: flex;
        justify-content: center;
        height: 25px;
        text-decoration: none;
        color: white;
        padding: 2px;
        font-size: 15px
    }

    .nav-link:hover{
        font-size: 16px;
        text-decoration: underline;
    }

    .fontFooter{
        font-size: 15px;
    }
</style>
