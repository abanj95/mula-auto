<template>
  <BreadcrumbInfo page-title="About Us" />

  <v-container class="about-section">
    <h1>WELCOME TO MULA CHANNELS</h1>
    <p>
      At <strong>Mula Trading Channels</strong>, we are committed to providing flexible financial solutions that empower individuals and businesses. Founded in [Year], we have grown to become a trusted name in vehicle-backed loans and financial services.
    </p>

    <v-row class="mission-section">
      <v-col cols="12" md="6">
        <v-img src="@/assets/about-mission.png" alt="Our Mission" height="300px" cover></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h2>Our Mission</h2>
        <p>
          To deliver secure and accessible loan options, while fostering financial well-being through innovative services and customer-centric solutions.
        </p>
      </v-col>
    </v-row>

    <v-row class="vision-section mt-5">
      <v-col cols="12" md="6" order-md="2">
        <v-img src="@/assets/about-vision.png" alt="Our Vision" height="300px" cover></v-img>
      </v-col>
      <v-col cols="12" md="6" order-md="1">
        <h2>Our Vision</h2>
        <p>
          To be the leading provider of asset-backed financial solutions, recognized for our integrity, transparency, and commitment to excellence.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BreadcrumbInfo from "@/components/Contact/BreadcrumbInfo.vue";
</script>

<style scoped>
.about-section {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  line-height: 1.7;
}

h1 {
  font-size: 2.5rem;
  color: #121536;
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  color: #1e2b5b;
  font-weight: bold;
  margin-bottom: 10px;
}

.mission-section, .vision-section {
  align-items: center;
}

p {
  color: #555;
}
</style>
