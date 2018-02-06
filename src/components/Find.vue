<template>

  <div class="geral">
   <page-header :title="title"/>

   <h1 class="titulo">Entre em Contato</h1>

   <div class="info">

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
  </div>


    <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63200.872248410546!2d-34.94067117096005!3d-8.095923407822823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18ded1bc6309%3A0xaf428d791ebffe71!2sEscola+Polit%C3%A9cnica+de+Pernambuco!5e0!3m2!1spt-BR!2sbr!4v1517527636915" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>

    </iframe>



     <div class="contatogeral">
       <p>Contato: {{ phone }}</p>
       <p>Email: {{ emailContact }}</p>
    </div>

  </div>
</template>

<script>
import PageHeader from './shared-components/PageHeader';

export default {
  data() {
    return {
      title: 'Sua Empresa',
      name: '',
      email: '',
      emailContact: 'comercial@polijuniorengenharia.com.br',
      phone: ' (81)  3184-7500',
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

  .titulo
  {
    font-size: 30px;
    padding: 3%;
    color: #e89f00;

  }
  .mapa{
    border-radius: 10%;
    width:50%;
    margin-left: 5%;
    padding: 1%;
  }
  .info{
    padding: 5%;
    margin-left: 5%;
    color: white;
    float: left;
  }
  .geral
  {
     background-image: url("../assets/fundo.jpg");
     background-size: cover;
  }
  .contatogeral
  {
    color: white;
  }

@media screen and (max-width: 320px)
{
  .titulo
  {
    font-size: 30px;
    padding: 5%;
    color: #e89f00;

  }
  .mapa{
    border-radius: 10%;
    width:90%;
    height: 50%;
    padding: 5%;
  }
  .info{
    padding: 5%;
    color: white;
  }
  .geral
  {
     background-image: url("../assets/fundo.jpg");
     background-size: cover;
  }
  .contatogeral
  {
    color: white;
  }
}

</style>
