<template>
  <div id="app">
      <banners-list-component></banners-list-component>
  </div>
</template>

<script>

import BannersListComponent from "@/components/BannersListComponent.vue";

export default {
  name: 'App',
  components: {
      BannersListComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
