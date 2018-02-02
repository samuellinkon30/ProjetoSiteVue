<template>
  <div class="navbar">
   <router-link to="/"><img class="brand" src="../assets/poli.png"></router-link>
    <ul class="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="About">About us</router-link></li>
      <li><router-link to="Service">Services</router-link></li>
      <li><router-link to="Find">Find us</router-link></li>
    </ul>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Slabo+27px');

.menu li {
  display: inline;
  margin: 0px;
  font-family: "Times New Roman", Times, serif;
}
.menu li a {
  text-decoration:none;
  color: black;
  font-family: 'Slabo 27px', serif;
  font-size: 18px;
  padding-right: 20px;
  padding-left: 20px;
}
.brand {
  display: inline;
  width: 80px;

  float: left;
}
.navbar {
  background-color: white;
  text-align: right;
  padding: 10px;
}
</style>
