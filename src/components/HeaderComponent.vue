<template>
  <v-app-bar
    class="header-nav"
    variant="flat"
    height="80"
    color="white"
  >
    <v-container class="header-content d-flex justify-center align-center">
      <!-- Logo Section -->
      <v-img
        text to="/"
        src="@/assets/mula-logo.svg"
        alt="Logo"
        max-width="150"
        class="logo"
      />

      <!-- Navigation Links -->
      <v-spacer />
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/services">Services</v-btn>
      <v-btn text to="/how-it-works">How it Works</v-btn>
      <v-btn text to="/showroom">Showroom</v-btn>
      <v-spacer />

      <!-- Call to Action Button -->
      <v-btn
        color="black"
        class="white--text"
        to="/contact"
        variant="elevated"
      >
        Contact Us
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup>
  // No specific script setup is needed for now
</script>

<style scoped>
.header-nav {
  background-color: #ffffff;
  margin: 0 auto; /* Center the whole navbar */
  width: 100%; /* Ensure it spans the full width */
}

.header-content {
  max-width: 1200px; /* Limit the width of the nav content */
  width: 100%;
  justify-content: space-between; /* Ensure the content is properly spaced */
  margin: 0 auto; /* Ensure the container is centered */
  display: flex; /* Flexbox layout to handle alignment */
}

.v-btn {
  font-weight: 500;
  color: #2b2b2b;
}

.v-btn:hover {
  background-color: #e0e0e0; /* Subtle hover effect */
}

.v-btn[aria-current="page"] {
  font-weight: bold;
  color: black; /* Bold for active page */
}
</style>
