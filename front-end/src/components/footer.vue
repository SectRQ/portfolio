<template>
  <footer class="footer bg-dark pt-4 pb-1 border-top border-secondary">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4 text-center text-md-start mb-4 mb-md-0">
          <h5 class="text-white fw-bold mb-1">Socials</h5>
          <p>rachid.abainou@hva.nl</p>
        </div>

        <div class="col-md-4 text-center mb-4 mb-md-0">
          <div class="d-flex justify-content-center gap-3">
            <a href="https://github.com/SectRQ" target="_blank" class="social-link" title="GitHub">
              <i class="bi bi-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/rachid-abainou/" target="_blank" class="social-link" title="LinkedIn">
              <i class="bi bi-linkedin"></i> LinkedIn
            </a>

          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerComponent"
}
</script>

<style scoped>
.footer {
  background-color: #1a1d21;

}

.social-link {
  color: #94a3b8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
  display: inline-block;
}

.social-link:hover {
  color: #38bdf8;
  transform: translateY(-2px);
}


</style>