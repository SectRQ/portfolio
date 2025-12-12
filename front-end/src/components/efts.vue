<template>
  <main class="container">
    <section class="py-5 bg-dark">
      <button type="button" class="btn btn-outline-secondary">
        <router-link to="/allProjects" class="nav-link" active-class="active">
          back to projects
        </router-link>
      </button>
      <a href="https://github.com/SectRQ/Project-Echoes-from-the-shadows">
        <button type="button" class="btn btn-outline-secondary">
          Go to the repository
        </button>
      </a>

      <h1 class="py-5">Dark Tech studio</h1>
      <p>
        Mijn project, genaamd "Echoes from the shadows" binnen de Dark Tech Studio ging over het ontwikkelen van een afluisterprototype dat bewustwording creëert over verborgen surveillance.
        Dit project heeft mij geholpen om zowel technisch als creatief verder te groeien. Hierbij heb ik gewerkt aan:
      </p>
      <ul>
        <li>Het uitwerken van ethische en onethische interface designs</li>
        <li>Technische documentatie en 3D-modellen</li>
        <li>Meewerken aan camerastreams, IP-scanners en hardwarekeuzes</li>
        <li>Een motion detection dashboard</li>
        <li>Testplannen en gebruikersobservaties</li>
      </ul>
      <p>Voor dit project had ik het Creative Technologist profiel.
        Zo ben ik op basis van design en nieuwe technologieën gaan experimenteren om interactieve prototypes te maken.
        Op die manier kon ik onderzoeken hoe mooi ontwerp, gebruiksgemak en ethische impact samenkomen in een oplossing.
      </p>

      <div>
        <h2 class="py-4">Hard skills</h2>
        <p>
          Hieronder zijn de technisch en creatieve skills die ik heb opgedaan:
        </p>
        <ul>
          <li>Frontend development: HTML, CSS, Bootstrap, python en Vue.js</li>
          <li>Prototyping & IOT: ESP32-CAM, Raspberry Pi Pico, microfoonmodules, sensors, breadboard wiring</li>
          <li>Network tooling: IP-scanning, WebSocket-connecties, live video streaming</li>
          <li>Design & UX: Ontwerpen en realiseren, Low-fi & high-fi design en interface design voor ethische & onethische prototypes</li>
          <li>3D-prints voor hardwarebehuizing, ontwerpen van fysieke cases</li>
          <li>Testplannen en hardware documentatie</li>
          <li>Usertesting: analyseren, observeren en interviewen</li>
        </ul>
      </div>
      <div>
        <h2 class="py-4">Soft skills</h2>
        <p>
          Hieronder zijn de process en samenwerking skills:
        </p>
        <ul>
          <li>Teamwork & communicatie: Overleggen, brainstormen, meedenken met hardware-, software- en design</li>
          <li>Analyseren: Gebruikersgedrag analyseren tijdens Society 5.0 en usertests</li>
          <li>Ethisch nadenken en reflecteren: Grenzen van surveillance onderzoeken, ontwerpkeuzes uitleggen vanuit impact</li>
          <li>Structuur aanbrengen in testresultaten</li>
          <li>Zelfreflectie & leerdoelen bijhouden: Bewust omgaan met eigen groei en actiepunten per sprint</li>
          <li>Creativiteit: Ontwerpen van interfaces, experimenteren met nieuwe technologieën en visuele concepten</li>
        </ul>
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
  margin: 1%;
}
</style>