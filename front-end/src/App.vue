<template>
  <navbar></navbar>
  <footerComponent></footerComponent>
  <router-view></router-view>
</template>

<script>
import navbar from "@/components/navbar";
import footerComponent from "@/components/footer";
export default {
  name: 'App',
  components: {
    navbar,
    footerComponent
  }
}
</script>

<style>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
</style>
