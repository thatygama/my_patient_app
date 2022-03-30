<template>
<div class="templateFeatures">
    <div class="features">
        <div class="featureBox" v-for="info in contentList" :key = "info.title">
            <h2>{{info.title.toUpperCase()}}</h2>
            <hr/>
            <h4>{{info.body}}</h4> 
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'FeatureList',
  data: () => ({
    contentList: [
        {title: 'Consultas', body:'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper. Velit aliquet sagittis id consectetur. Aliquam eleifend mi in nulla posuere.'},
        {title: 'Agendamento de Exames', body:'Incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper. Velit aliquet sagittis id consectetur. Aliquam eleifend mi in nulla posuere.'},
        {title: 'Resultados', body:'Velit aliquet sagittis id consectetur. Aliquam eleifend mi in nulla posuere.'},
        {title: 'Alarme de Urgências - 24h', body:'Faucibus vitae aliquet nec ullamcorper. Velit aliquet sagittis id consectetur. Aliquam eleifend mi in nulla posuere.'}
    ]
  })
}
</script>

<style scoped>
    .templateFeatures{
        margin: auto;
        width: 100vw;
        display: flex;
        justify-content: center;
    }

    .features{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        max-width: 900px;
    }

    .featureBox{
        border: 1px solid rgb(131, 131, 131, 0.2);
        width: 400px;
        height: 300px;
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    h2{
        font-size: 15px;
        color: #4e8ed8;
    }

    h4{
        color: rgb(170, 170, 170);
        font-size: 13px;
        padding: 0 20px 0 20px;                
    }
</style>
