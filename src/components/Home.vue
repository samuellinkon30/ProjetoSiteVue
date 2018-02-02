<template>

  <page-header :title="title"/>


</template>

<script>
import PageHeader from './shared-components/PageHeader';

export default {
    data() {
      return {
        title: 'Poli Junior Engenharias',
      }
    },
    components: {
      PageHeader,
    },
}
</script>
<style >

body {
	background-image: url("../assets/fundo.jpg");
	background-size:cover;
	width: 100%;
}
h1{
	color: #e89f00;
	font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>
