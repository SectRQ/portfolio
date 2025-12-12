<template>

  <div class="first container row bg-dark">
    <div class="col">
      <img class="profile-img" alt="alt" src="../assets/new.jpg">
    </div>
    <div class="col header">
      <h1 class="py-2">Hi, ik ben Rachid Abainou</h1>
      <p class="lead">En ik volg de opleiding Software Engineering aan de Hogeschool van Amsterdam.
        Ik hou van het oplossen van complexe problemen en het bedenken van innovatieve ideeën op een creatieve manier.
      </p>

      <router-link to="/allProjects" active-class="active"><button class="btn btn-outline-secondary">Projects
      </button></router-link>

    </div>
  </div>

</template>

<script>
export default {
  name: 'homepageComponent',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.first{
  margin-top: 10%;

  border-radius: 0 1rem 1rem 0;

}
.header{
  text-align: left;
  margin-top: 8%;
  color: #f9f9fa;

}
.profile-img{
  width: 70%;
  min-height: 100%;
}
.lead{
  font-style: italic;
}


.btn {
  margin: 1%;
}
.btn-outline-secondary {
  padding: 12px 28px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: transform 0.2s ease-in-out;
}

.btn-outline-secondary:hover {
  transform: scale(1.08);
}

</style>
