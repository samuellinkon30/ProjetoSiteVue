<template>
  <div class="g">
    <page-header :title="title"/>

    <h1 >Serviços</h1>

    <div class="servico">

      <h5 class="servico-title">Serviço 1</h5>
      <a href="#"><img class = "ft" src="../assets/serv1.jpg"></a>
    </div>

    <div class="servico">
      <h5 class="servico-title" >Servico 2</h5>
      <a href="#"><img class = "ft" src="../assets/serv2.jpg"></a>
    </div>

    <div class="servico">
      <h5 class="servico-title">Serviço 3</h5>
      <a href="#"><img class = "ft" src="../assets/serv3.jpg"></a>
    </div>

     <div class="servico">
      <h5 class="servico-title">Serviço 4</h5>
      <a href="#"><img class = "ft" src="../assets/serv4.jpg"></a>
    </div>

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

<style scoped>
.g{
  background-image: url("../assets/fundo.jpg");
  background-size:cover;
  padding-bottom: 180vh;
}
.g h1
{
  color: #e89f00;
  padding: 1%;
  font-size: 35px;
  font-family: 'Oswald', sans-serif;
}
.servico{
  padding: 10px;
  margin: 10px;
  float:left;
  margin-left: 6%;
  width: 40%;
}
.ft
{
  width: 100%;
  float: left;
  border-radius: 20%;
}

.servico h5{
  color: #e89f00;
  font-size: 25px;
  font-family: 'Oswald', sans-serif;
  text-align: center;
  padding-bottom: 3%;
}

@media screen and (max-width: 320px){

.servico{
  width: 80%;
  margin-left: 10%;
}
.ft
{
  width: 100%;
margin-left: 0;
  border-radius: 20%;
}

.servico h5{
  color: #e89f00;
  font-size: 25px;
  font-family: 'Oswald', sans-serif;
  padding-bottom: 3%;
}
.g{
  background-image: url("../assets/fundo.jpg");
  background-size:cover;
  padding-bottom: 180vh;
}
}

</style>
