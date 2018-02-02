<template>
    <div class="geral">
       <page-header :title="title"/>
        <div class="about">
            <p class="txt1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. veniam,
            </p>
            <p class="txt2">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
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
        title: 'Company',
      }
    },
    components: {
      PageHeader,
    },
}
</script>

<style>

body {
    background-image: url("../assets/fundo.jpg");
    background-size:cover;
    width: 100%;
}
.img{
    width: 600px;
    height: 500px;
    margin-bottom: 5%;
    margin-left: 8%;
    margin-top: 3%;
    float: left;
    border-radius: 20%;
}
.txt2{
    margin-left: 25%;
}
.txt1{
    margin-left: 25%;
}


.about
{
    width: 50%;
    position: absolute;
    color: black;
    margin-left: 0%;
    margin-top: 3%;
    text-align:left;
    font-family: "Comic Sans MS", cursive, sans-serif;
}

</style>
