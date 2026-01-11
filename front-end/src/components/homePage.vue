<template>
  <div class="hero-section d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center profile-card shadow-lg">
        <div class="col-lg-5 p-0">
          <div class="image-container">
            <img class="profile-img" alt="Rachid Abainou" src="../assets/new.jpg">
          </div>
        </div>

        <div class="col-lg-7 header-content p-5">
          <span class="badge mb-3">Software Engineering Student</span>
          <h1 class="display-4 fw-bold mb-3">Hi, ik ben <span class="text-accent">Rachid Abainou</span></h1>
          <p class="lead mb-4">
            Aan de <strong>Hogeschool van Amsterdam</strong> werk ik aan het oplossen van complexe problemen.
            Ik combineer technische precisie met innovatieve ideeën om creatieve softwareoplossingen te bouwen.
          </p>

          <div class="cta-buttons">
            <router-link to="/allProjects" class="btn btn-accent btn-lg me-3">
              Bekijk mijn projecten
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepageComponent',
}
</script>

<style scoped>

.hero-section {
  min-height: 80vh;
  padding: 40px 0;
}

.profile-card {
  background: #1f2428;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.image-container {
  height: 100%;
  min-height: 400px;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.profile-card:hover .profile-img {
  transform: scale(1.05);
}

.header-content {
  text-align: left;
  color: #f9f9fa;
}

.text-accent {
  color: #38bdf8;
}

.badge {
  background-color: rgba(56, 189, 248, 0.1);
  color: #38bdf8;
  border: 1px solid #38bdf8;
  padding: 8px 15px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-accent {
  background-color: #38bdf8;
  color: #0f172a;
  font-weight: bold;
  border: none;
}

.btn-accent:hover {
  background-color: #0ea5e9;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(56, 189, 248, 0.3);
}

</style>