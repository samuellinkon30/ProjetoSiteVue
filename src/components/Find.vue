<template>
  <div class="geral">
   <page-header :title="title"/>
   <h1>Encontre em Contato</h1>
   <div class="txt">
      <form @submit.prevent="sendEmail">
        <label>Nome:</label>
        <input type="text" name="Nome" v-model="name" value="Seu Nome Aui" required="required">
        <br><br>
        <label>Email:</label>
        <input type="email" name="Email" v-model="email" value="Seu Eamil Aqui" required="required">
        <br><br>
        <button>ENVIAR</button>
    </form>
    <i class="fas fa-map"></i>
    <div class="contatogeral">
     <p>Contato: {{ phone }}</p>
     <p>Email: {{ emailContact }}</p>
    </div>
    </div>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63200.872248410546!2d-34.94067117096005!3d-8.095923407822823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18ded1bc6309%3A0xaf428d791ebffe71!2sEscola+Polit%C3%A9cnica+de+Pernambuco!5e0!3m2!1spt-BR!2sbr!4v1517527636915" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
</template>

<script>
import PageHeader from './shared-components/PageHeader';

export default {
  data() {
    return {
      title: 'Poli Junior Engenharias',
      name: '',
      email: '',
      emailContact: 'comercial@polijuniorengenharia.com.br',
      phone: '(81)-3184-7500',
    };
  },
  components: {
    PageHeader,
  },
  methods: {
    sendEmail() {},
  },
};
</script>

<style>
.txt1{
  color: white;
  size: 30px;
  text-align:center;
    font-family: "Comic Sans MS", cursive, sans-serif;
}
.txt{
  color: white;
  margin-left: 5%;
  margin-top: 10%;
  float: left;
  text-align:left;
}
body {
  background-image: url("../assets/fundo.jpg");
  background-size:cover;
  width: 100%;
}
.map {
  border-radius: 25px;
  text-align:right;
  margin-top: 5%;
  margin-bottom: 3%;
  text-align:right;
  margin-right: 10%;
}
h1{
  color: #e89f00;
  margin-top: 1%;
  font-family: 'Oswald', sans-serif;
}
.contatogeral{
  margin-top: 60%;
}
</style>
