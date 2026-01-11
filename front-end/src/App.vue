<template>
  <div class="site-wrapper">
    <navbar></navbar>
    <main class="content-area">
      <router-view></router-view>
    </main>
    <footerComponent></footerComponent>
  </div>
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
  font-family: Roboto,serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content-area {
  flex: 1;
}
</style>
