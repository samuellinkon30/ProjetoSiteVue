<template>
    <div class="geral">
       <page-header :title="title"/>
        <h1>Sobre a nossa Empresa</h1>
        <div class="about">
            <p class="txt1">
                {{ texto1 }}
            </p>
            <p class="txt2">
                {{ texto2 }}
            </p>
        </div>
        <img class = "img" src=../assets/papel.jpg>
    </div>
</template>

<script>
import PageHeader from './shared-components/PageHeader';

export default {
  data() {
    return {
      texto1: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse illum dolore eu fugiat n',
      texto2: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse illum dolore eu fugiat n',
      title: 'Poli Junior Engenharias',
    };
  },
  components: {
    PageHeader,
  },
};
</script>

<style>
body {
 background-image: url("../assets/fundo.jpg");
 background-size:cover;
 width: 100%;
}
.img{
 width: 620px;
 height: 500px;
 text-align: center;
 margin-top: 0%;
 border-radius: 18%;
}
.txt2{
   color: black;
 text-align: center;
}
.txt1{
   color: black;
 text-align: center;
}
.about{
 margin-left: 30%;
 margin-top: 3%;
 width: 40%;
 position: absolute;
 font-family: "Comic Sans MS", cursive, sans-serif;
}
h1{
  color: #e89f00;
  font-family: 'Oswald', sans-serif;
}
</style>
