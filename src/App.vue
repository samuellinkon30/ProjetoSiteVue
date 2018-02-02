<template>
  <div id="app">
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu';

export default {
  name: 'App',
  components: {
    Menu,
  },
};
</script>

<style>
body {
  margin-top: 0%;
  margin-left: 0%;
  margin-right:0%;
  padding: 0%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
