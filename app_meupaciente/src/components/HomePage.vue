<template>
  <div class="homePage">
    <h2>O Controle da saúde em suas mãos! <v-icon color="blue lighten-1">mdi-thumb-up</v-icon></h2>
  
    <p>
      Vel orci porta non pulvinar neque laoreet suspendisse interdum. Ultrices sagittis orci a scelerisque purus. Amet mauris commodo quis imperdiet massa tincidunt nunc. Pellentesque nec nam aliquam sem et. Enim tortor at auctor urna nunc id cursus metus aliquam. Tortor at risus viverra adipiscing at in. Tincidunt id aliquet risus feugiat in ante. Accumsan sit amet nulla facilisi morbi. In eu mi bibendum neque egestas congue. Pretium fusce id velit ut tortor pretium viverra suspendisse. Consectetur a erat nam at. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Turpis in eu mi bibendum neque egestas. Cursus in hac habitasse platea dictumst quisque. Morbi enim nunc faucibus a pellentesque sit.
      <br><br><br>
      <span>
        <div>
        Morbi blandit cursus risus at. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Placerat vestibulum lectus mauris ultrices eros. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Id interdum velit laoreet id. Nullam eget felis eget nunc. Tincidunt eget nullam non nisi. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Interdum velit laoreet id donec. Libero id faucibus nisl tincidunt eget. Ac tortor vitae purus faucibus ornare. Purus sit amet luctus venenatis lectus. Risus sed vulputate odio ut. Enim diam vulputate ut pharetra sit amet aliquam. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Nec ultrices dui sapien eget mi proin sed. Vitae congue eu consequat ac felis donec.
        </div>
      </span>
      <br><br>
      Vivamus at augue eget arcu dictum varius. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Lectus urna duis convallis convallis tellus. Euismod in pellentesque massa placerat duis ultricies. Habitant morbi tristique senectus et netus et. Vel facilisis volutpat est velit egestas dui id ornare. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Lacus viverra vitae congue eu consequat ac felis donec et. Egestas purus viverra accumsan in nisl nisi. A arcu cursus vitae congue mauris. Ligula ullamcorper malesuada proin libero nunc consequat. Sit amet risus nullam eget felis eget. Viverra adipiscing at in tellus integer feugiat. Mattis aliquam faucibus purus in.      
    </p>

    <h3>ALGUNS DOS NOSSOS SERVIÇOS</h3>
    <FeatureList class="cards"/>
  </div>
</template>

<script>
import FeatureList from './partials/FeatureList.vue';

export default {
  components: {
    FeatureList
  }
}
</script>

<style scoped>
  .homePage{
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  h2{
    margin: 100px 20px 30px 20px;
    color: #4e8ed8;
  }

  p{
    margin: 30px 60px 60px 60px;
  }

  p span div{
    border: 1px solid rgb(78, 142, 216, 0.5);
    margin: 10px 10%;
    padding: 30px 50px;
  }

  h3{
    color: #4e8ed8;
    margin-bottom: 40px;
  }

  .cards{
    margin-bottom: 150px;
  }

</style>
