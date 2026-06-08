<template>
  <main class="container py-5">
    <section class="py-5 bg-dark">
      <button type="button" class="btn btn-outline-secondary">
        <router-link to="/allProjects" class="nav-link" active-class="active">
          back to projects
        </router-link>
      </button>
      <a href="https://github.com/SectRQ/Project-Agile-Development">
        <button type="button" class="btn btn-outline-secondary">
          Go to the repository
        </button>
      </a>

      <h1 class="text-center">HvA Opendag</h1>
      <div class="row g-3 my-5 justify-content-center">
        <div class="col-md-4">
          <div class="img-wrapper">
            <img src="../assets/hva_home.png" class="project-img" alt="Prototype 1">
          </div>
        </div>
        <div class="col-md-4">
          <div class="img-wrapper">
            <img src="../assets/logo-HVA.png" class="project-img" alt="Project Logo">
          </div>
        </div>
        <div class="col-md-4">
          <div class="img-wrapper">
            <img src="../assets/studierichtingen.png" class="project-img" alt="Prototype 2">
          </div>
        </div>
      </div>

      <p>
        Mijn project binnen dit team ging over het ontwikkelen van een webapplicatie die informatie en allemaal functies bevat over de opendag voor de Hogeschool van Amsterdam.
        Dit was mijn 2de project en heb ervaring opgedaan op het gebied van backend en frontend.
        Hierbij heb ik gewerkt aan:
      </p>
      <ul>
        <li>Frontend/Backend development met een MVC structuur</li>
        <li>Testen van functionaliteiten en gebruikersflows</li>
        <li>Userstories gerealiseerd en getest</li>
        <li>Gebruik gemaakt van MySQL en REST Api</li>
        <li>Zelfstandig oplossen van problemen en bugs</li>
        <li>Analyseren en verbeteren van usability binnen de applicatie</li>
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
                <li>Frontend development: HTML, CSS, Bootstrap, NodeJS en JavaScript</li>
                <li>Backend & security: ExpressJS, password hashing en gebruikersvalidatie</li>
                <li>Database & storage: UML -> EER en MySQL</li>
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
                <li>SCRUM ontwikkel methode: Sprint planning, reviews, standups en retrospectives.</li>
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