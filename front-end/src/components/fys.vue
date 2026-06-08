<template>
  <main class="container py-5">
    <section class="py-5 bg-dark">
      <button type="button" class="btn btn-outline-secondary">
        <router-link to="/allProjects" class="nav-link" active-class="active">
          back to projects
        </router-link>
      </button>
      <a href="https://github.com/SectRQ/Project-Fasten-Your-Seatbelts">
        <button type="button" class="btn btn-outline-secondary">
          Go to the repository
        </button>
      </a>

      <h1 class="text-center">CORWITHME</h1>
      <div class="row g-3 my-5 justify-content-center">
        <div class="col-md-4">
          <div class="img-wrapper">
            <img src="../assets/fys_profile.png" class="project-img" alt="Prototype 1">
          </div>
        </div>
        <div class="col-md-4">
          <div class="img-wrapper">
            <img src="../assets/fys_verzoeken.png" class="project-img" alt="Project Logo">
          </div>
        </div>
        <div class="col-md-4">
          <div class="img-wrapper">
            <img src="../assets/fys_reizigers.png" class="project-img" alt="Prototype 2">
          </div>
        </div>
        <div class="col-md-4">
          <div class="img-wrapper">
            <img src="../assets/logo-white.png" class="project-img" alt="Prototype 2">
          </div>
        </div>
      </div>

      <p>
        Tijdens mijn eerste project Fasten Your Seatbelts (FYS) heb ik in teamverband gewerkt aan het ontwerpen en realiseren van een webapplicatie voor opdrachtgever Corendon.
        Het doel van de applicatie was om alleenstaande reizigers van 40+ met elkaar in contact te brengen op basis van gedeelde interesses.

      </p>
      <ul>
        <li>Frontend/Backend development</li>
        <li>Analyseren van de doelgroep en requirements</li>
        <li>Ontwerpen van de user interface</li>
        <li>Userstories gerealiseerd en getest</li>
        <li>Gebruik gemaakt van MySQL en REST Api</li>
        <li>Zelfstandig oplossen van problemen en bugs</li>
      </ul>

      <div class="container row">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="skill-card p-4 h-100">
              <h3 class="py-4">Hard skills</h3>
              <p>
                Hieronder zijn de technisch en creatieve skills die ik heb opgedaan/verbeterd:
              </p>
              <ul>
                <li>Frontend development: HTML, CSS, JavaScript</li>
                <li>Backend: werken met de FYS‑Cloud API</li>
                <li>Database & storage: UML -> EER en MySQL</li>
                <li>Design & UX: Ontwerpen en realiseren, Low-fi & high-fi design en interface design voor prototypes in figma</li>
                <li>Testplannen en documentatie</li>
                <li>Requirements & analyse: business case, doelgroepanalyse, functionele eisen</li>
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
                <li>Probleemoplossend denken: Bugs, errors en technische problemen analyseren en oplossen</li>
                <li>Analyseren: Gebruikerservaring en functionaliteiten testen en verbeteren</li>
                <li>Zelfsturing en verantwoordelijkheid</li>
                <li>Persoonlijke ontwikkeling: SMART leerdoelen</li>
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