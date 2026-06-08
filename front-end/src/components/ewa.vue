<template>
  <main class="container py-5">
    <section class="py-5 bg-dark">
      <button type="button" class="btn btn-outline-secondary">
        <router-link to="/allProjects" class="nav-link" active-class="active">
          back to projects
        </router-link>
      </button>
      <a href="https://github.com/SectRQ/Project-Enterprise-Web-Application">
        <button type="button" class="btn btn-outline-secondary">
          Go to the repository
        </button>
      </a>

      <h1 class="text-center">Black Jack</h1>
      <div class="row g-3 my-5 justify-content-center">
        <div class="col-md-4">
          <div class="img-wrapper">
            <img src="../assets/ingame.png" class="project-img" alt="Prototype 1">
          </div>
        </div>
        <div class="col-md-4">
          <div class="img-wrapper">
            <img src="../assets/login.png" class="project-img" alt="Project Logo">
          </div>
        </div>
        <div class="col-md-4">
          <div class="img-wrapper">
            <img src="../assets/modes.png" class="project-img" alt="Prototype 2">
          </div>
        </div>
        <div class="col-md-4">
          <div class="img-wrapper">
            <img src="../assets/shop.png" class="project-img" alt="Prototype 2">
          </div>
        </div>
      </div>

      <p>
        Mijn project binnen het team ging over het ontwikkelen van een online Blackjack applicatie waarbij de focus lag op een veilige,
        gebruiksvriendelijke en niet-gok gerelateerde game-ervaring. Tijdens dit project heb ik technisch en zelfstandig veel ervaring opgedaan binnen zowel frontend development als het testen en verbeteren van de applicatie.
        Hierbij heb ik gewerkt aan:
      </p>
      <ul>
        <li>Frontend/Backend development en interface onderdelen</li>
        <li>Testen van functionaliteiten en gebruikersflows</li>
        <li>Meedenken over security, user experience en performance</li>
        <li>Database- en opslagoplossingen onderzoeken</li>
        <li>Zelfstandig oplossen van problemen en bugs</li>
        <li>Analyseren en verbeteren van usability binnen de applicatie</li>
      </ul>
      <p>Voor dit project had ik een actieve rol binnen het ontwikkelproces waarbij ik zowel zelfstandig als samen met het team werkte aan het verbeteren van de applicatie.
        Hierbij lag de focus op gebruiksvriendelijkheid, performance en het realiseren van een moderne online game-ervaring.
        Ook heb ik meegewerkt aan het testen van de applicatie om fouten, verbeterpunten en usability problemen te analyseren.
      </p>

      <div class="container row">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="skill-card p-4 h-100">
              <h3 class="py-4">Hard skills</h3>
              <p>
                Hieronder zijn de technisch en creatieve skills die ik heb opgedaan/verbeterd:
              </p>
              <ul>
                <li>Frontend development: HTML, CSS, Bootstrap, Vue.js en JavaScript</li>
                <li>Backend & security: JWT-authenticatie, password hashing en gebruikersvalidatie</li>
                <li>Database & storage: Springboot, maven, Java en hibernate</li>
                <li>Design & UX: Ontwerpen en realiseren, Low-fi & high-fi design en interface design voor prototypes in figma</li>
                <li>Testplannen en documentatie</li>
                <li>Usertesting: analyseren, observeren en interviewen</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-card p-4 h-100">
              <h2 class="py-4">Soft skills</h2>
              <p>
                Hieronder zijn de process en samenwerking skills:
              </p>
              <ul>
                <li>Teamwork & communicatie: Overleggen, brainstormen, meedenken met hardware-, software- en design</li>
                <li>Initiatief nemen: Actieve bijdrage en initiatief genomen tijdens afronding</li>
                <li>Probleemoplossend denken: Bugs, errors en technische problemen analyseren en oplossen</li>
                <li>Analyseren: Gebruikerservaring en functionaliteiten testen en verbeteren</li>
                <li>Zelfreflectie & leerdoelen bijhouden: Bewust omgaan met eigen groei en actiepunten per sprint</li>
                <li>Creativiteit: Ontwerpen van interfaces, experimenteren met nieuwe technologieën en visuele concepten</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  </main>
</template>

<script>
export default {
  name: "echoesFromTheShadows"
}
</script>

<style scoped>
section{
  padding: 5%;
  text-align: left;
  min-height: 100vh;
}

.btn{
  margin: 0% 1% 5% 1%;
}
.skill-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
}
.img-wrapper {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;
}

.img-wrapper:hover .project-img {
  transform: scale(1.1);
  filter: brightness(1.1);
}
</style>