<template>

<div>
  <page-header :title="title"/>
  <div class="titulo"><h1>Descrição da sua Empresa</h1></div>

</div>
</template>

<script>
import PageHeader from './shared-components/PageHeader';

export default {
  data() {
    return {
      title: 'Sua Empresa',
    };
  },
  components: {
    PageHeader,
  },
};
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Oswald');

.titulo {
background-image: url("../assets/fundo.jpg");
background-size:cover;
padding-bottom: 85vh;
}
.titulo h1{
margin-top: 0%;
color:#e89f00;
font-family:'Oswald', sans-serif;
}

@media screen and (min-width: 320px)
{
  .titulo h1{
  color: #e89f00;
  padding-top: 10%;
  font-size: 25px;
  font-family: 'Oswald', sans-serif;
  }
  .titulo {
  background-image: url("../assets/fundo.jpg");
  background-size:cover;
  padding-bottom: 80vh;
}
 }
</style>

