<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li>
          <router-link to="/home" class="nav-link" active-class="active">Home</router-link>
        </li>
        <li>
          <router-link to="/allProjects" class="nav-link" active-class="active">Projects</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbarComponent"
}
</script>

<style scoped>
.navbar{
  padding: 1%;

}
</style>