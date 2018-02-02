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

  background-color: #e89f00;
  padding: 10;
}
.header h1 {
  font-size: 2em;
  color: white;
  font-family: 'Oswald', sans-serif;
}
  </style>
