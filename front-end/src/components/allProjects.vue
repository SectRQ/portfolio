<template>
  <div class="py-5">
    <div class="container">
      <div class="row">

        <div class="col-md-4">
          <div class="card mb-4 box-shadow border-3">
            <div class="btn-group">
              <router-link to="/echoesFromTheShadows" class="nav-link" active-class="active">
                <img class="card-img-top" src="../assets/efts_logo_v.2.png" data-holder-rendered="true">
                <div class="card-body bg-dark">
                  <p class="card-text">Project EFTS - Een kritische ervaring gecreëerd die de ethische risico van
                    surveillance blootlegt doormiddel van afluisterapparatuur.</p>
                  <div class="d-flex justify-content-between align-items-center">
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <a href="https://github.com/SectRQ/Project-Fasten-Your-Seatbelts">
            <div class="card mb-4 box-shadow border-3">
              <div class="btn-group nav-link">
                <img class="card-img-top" src="../assets/logo-white.png" data-holder-rendered="true">
                <div class="card-body bg-dark">
                  <p class="card-text">Project Fasten Your Seatbelts — Een fullstack web applicatie
                    gemaakt voor de reizigers van Corendon om een vakantie partner te
                    vinden.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="https://github.com/SectRQ/Project-Agile-Development">
            <div class="card mb-4 box-shadow border-3">
              <div class="btn-group nav-link">
                <img class="card-img-top" src="../assets/logo-HVA.png" data-holder-rendered="true">
                <div class="card-body bg-dark">
                  <p class="card-text">Project Agile Development— Een web
                    applicatie geschikt voor gebruik tijdens de open
                    dagen voor het HBO-ICT op de Hogeschool van Amsterdam.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="https://github.com/SectRQ/Project-Enterprise-Web-Application">
            <div class="card mb-4 box-shadow border-3">
              <div class="btn-group nav-link">
                <img class="card-img-top" src="../assets/nav_icon.png" data-holder-rendered="true">
                <div class="card-body bg-dark">
                  <p class="card-text">Project Enterprise Web Application — Een fullstack webapplicatie
                    die ook mobielvriendelijk is in de vorm van een BlackJack simulator.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                  </div>
                </div>
              </div>
            </div>
          </a>
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
a {
  text-decoration: none;
}

.card {
  transition: transform .2s;
  border-radius: 0;
  background: #1f2428;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);


}

.card:hover {
  transform: translateY(-2%);
  border-color: #38bdf8;
}

.card-img-top {
  display: block;
  height: 15rem;
  width: 100%;


}

.card-text {
  font-style: italic;
  color: #f9f9fa;
}
</style>