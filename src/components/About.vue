<template>
    <div class="geral">

       <page-header :title="title"/>

       <div class ="texto">

         <h1>Sobre sua Empresa</h1>

        <div class="about">
            <p class="txt1">
                {{ texto1 }}
            </p>
            <p class="txt1">
                {{ texto2 }}
            </p>

        </div>
       </div>

    </div>
</template>

<script>
import PageHeader from './shared-components/PageHeader';

export default {
  data() {
    return {
      texto1: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse illum dolore eu fugiat n.',
      texto2: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse illum dolore eu fugiat n.',
      title: 'Sua Empresa',
    };
  },
  components: {
    PageHeader,
  },
  methods:{
    getAboutInfo(){
      axios.get('localhost:3030/about').then(res => {
          console.log(res);
      }).catch( err=> { console.log(err); });
    },
  },
  beforeCreated() {
    this.getAboutInfo();
  },
};
</script>


<style>

.geral {
 background-image: url("../assets/fundo.jpg");
 background-size:cover;
 padding-bottom: 43vh;
}

.txt1{
  background-color: black;
  border-radius: 5%;
  color: white;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-left: 5%;
  margin-right: 5%;
  font-family: "Comic Sans MS", cursive, sans-serif;

}

.texto h1{
  color: #e89f00;
  padding: 3%;
  font-size: 25px;
  font-family: 'Oswald', sans-serif;
}

@media screen and (max-width: 320px)
{
.geral {
 background-image: url("../assets/fundo.jpg");
 background-size:cover;
 padding-bottom: 7vh;
}

.txt1{
  background-color: black;
  border-radius: 5%;
  color: white;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-left: 5%;
  margin-right: 5%;
  font-family: "Comic Sans MS", cursive, sans-serif;

}

.texto h1{
  color: #e89f00;
  padding: 5%;
  font-size: 25px;
  font-family: 'Oswald', sans-serif;
}
 }
</style>
