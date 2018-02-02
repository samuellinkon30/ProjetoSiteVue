<template>
  <header class="header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
* { margin: 0%; }

.header {

  background: linear-gradient(to bottom, white, black);
  padding: 20px;
}

.header h1 {
  font-size: 2em;
  color: white;
 font-family: "Comic Sans MS", cursive, sans-serif;}
</style>
