<template>
    <div class="geral">
       <page-header :title="title"/>
       <div class ="ft">
         <h1>Sobre sua Empresa</h1>
        <div class="about">
            <p class="txt1">
                {{ texto1 }}
            </p>
            <p class="txt2">
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
};
</script>

<style>
.ft {
 background-image: url("../assets/fundo.jpg");
 background-size:cover;
 padding-bottom: 85vh;
}

.txt2{
   color: white;
 text-align: center;
}
.txt1{
   color: white;
 text-align: center;
}
.about{
 margin-top: 3%;
 padding-right: 1%;
 font-family: "Comic Sans MS", cursive, sans-serif;
}
h1{
  color: #e89f00;
  font-size: 25px;
  font-family: 'Oswald', sans-serif;
}

@media screen and (max-width: 320px)
{
  .ft {
 background-image: url("../assets/fundo.jpg");
 background-size:cover;
}
  .txt2{
 color: white;
 text-align: left;
}
.txt1{
   color: white;
 text-align: left;
}
.about{
 margin-left: 5%;
 margin-top: 3%;
 width: 95%;
 font-size: 15px;
 font-family: "Comic Sans MS", cursive, sans-serif;
}
.ft {
 background-image: url("../assets/fundo.jpg");
 background-size:cover;
 padding-bottom: 8vh;
}
 }
</style>
