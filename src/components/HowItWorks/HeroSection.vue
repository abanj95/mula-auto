<template>
    <v-container fluid class="hero-section">
      <v-img 
        src="@/assets/hero/loan_banner.jpg" 
        height="400px" 
        cover
      >
        <div class="overlay">
          <h1 class="hero-title">How to get a loan against your car</h1>
        </div>
      </v-img>
    </v-container>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .hero-section {
    padding: 0;
    margin: 0;
  }
  
  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .hero-title {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    text-align: center;
  }
  </style>
  