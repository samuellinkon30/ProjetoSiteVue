<template>

<div>
  <page-header :title="title"/>
  <h1>Projetos de Engenharias com o melhor custo benefício</h1>
</div>
</template>

<script>
import PageHeader from './shared-components/PageHeader';

export default {
  data() {
    return {
      title: 'Poli Junior Engenharias',
    };
  },
  components: {
    PageHeader,
  },
};
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Oswald');
body {
background-image: url("../assets/fundo.jpg");
background-size:cover;
width: 100%;
}
h1{
color:#e89f00;
font-family:'Oswald', sans-serif;
}
</style>
