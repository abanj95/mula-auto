<template>
    <v-app-bar
      class="header-nav"
      flat
      height="80"
      color="white"
      elevation="2"
    >
      <v-container class="d-flex justify-space-between align-center">
        <!-- Logo Section -->
        <v-img
          src="@/assets/mula-logo.svg"
          alt="Logo"
          max-width="150"
          class="logo"
        />
        <!-- <span class="logo-text">SUVE</span> -->
  
        <!-- Navigation Links -->
        <v-spacer />
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About Us</v-btn>
        <v-btn text to="/cars">Cars</v-btn>
        <v-btn text to="/futures">Futures</v-btn>
        <v-btn text to="/help">Help</v-btn>
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
    border-radius: 30px; /* Rounded corners */
    margin-top: 20px; /* Push down from the top */
    margin-left: 20px;
    margin-right: 20px;
    /* margin: 5px auto; */
    /* padding: 10px;  */
    max-width: 1400px;
    
  }
  
  .logo-text {
    font-size: 24px;
    font-weight: bold;
    margin-left: 10px;
    color: #2b2b2b;
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
  
  .v-app-bar {
    border-radius: 15px; /* Apply border-radius to the header itself */
  }
  
  </style>
  