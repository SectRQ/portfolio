<template>
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 box-shadow border-black border-3">
            <div class="btn-group">
              <router-link to="/echoesFromTheShadows" class="nav-link" active-class="active">
                <img class="card-img-top" src="../assets/efts_logo_v.2.png" data-holder-rendered="true">
                <div class="card-body bg-dark">
                  <p class="card-text">Een kritische ervaring gecreëerd die de ethische risico van surveillance blootlegt doormiddel van afluisterapparatuur.</p>
                  <div class="d-flex justify-content-between align-items-center">
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllProjects"
}
</script>

<style scoped>
.card{
  transition: transform .2s
}
.card:hover{
  transform: scale(1.1)
}
.card-img-top{
  display: block;
  height: 15rem;
  width: 100%;

}
.card-text{
  font-style: italic;
  color: #f9f9fa;
}
</style>