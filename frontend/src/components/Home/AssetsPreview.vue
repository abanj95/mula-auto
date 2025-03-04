<template>
    <div class="assets-preview">
      <!-- Perfectly Smoothed Top Wave -->
      <div class="wave-container top-wave">
        <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg" class="wave-svg">
          <path
            fill="#fff"
            d="M0,80 C180,120 360,40 540,70 C720,100 900,140 1080,120 C1260,100 1440,40 1440,40 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>
  
      <!-- Asset Grid -->
      <v-row class="mt-0 justify-center">
        <v-col v-for="(asset, index) in assets" :key="index" cols="12" md="3" sm="6" class="text-center">
          <!-- Large Asset Image -->
          <v-img :src="asset.image" class="asset-image"></v-img>
  
          <!-- Title & Description -->
          <h3 class="mt-2 font-weight-bold">{{ asset.title }}</h3>
          <p class="text-body-2">{{ asset.description }}</p>
  
          <!-- Button to "/pawn" -->
          <v-btn class="pawn-button mt-4" color="#2b2b2b" rounded large to="/pawn">
            Pawn Now
          </v-btn>
        </v-col>
      </v-row>
  
      <!-- Bottom Wave (Unchanged) -->
      <div class="wave-container bottom-wave">
        <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg" class="wave-svg">
          <path
            fill="#f0f8ff"
            d="M0,160C80,144,160,112,240,117.3C320,123,400,165,480,165.3C560,165,640,123,720,106.7C800,91,880,101,960,122.7C1040,144,1120,176,1200,186.7C1280,197,1360,187,1400,181.3L1440,176V320H0Z"
          ></path>
        </svg>
      </div>
    </div>
  </template>
  
  <script setup>
  import vehicleImg from "@/assets/frontvehicles/car.png";
  import boatImg from "@/assets/frontvehicles/boat.png";
  import bikeImg from "@/assets/frontvehicles/bike.png";
  import minivanImg from "@/assets/frontvehicles/bakki.png";
  
  const assets = [
    { title: "Vehicle", image: vehicleImg, description: "Get an auto loan against your car." },
    { title: "Boat", image: boatImg, description: "Finance your needs with a loan against your boat." },
    { title: "Bike", image: bikeImg, description: "Use your bike as collateral for an instant loan." },
    { title: "Mini Vans", image: minivanImg, description: "Secure funds using your mini van today." },
  ];
  </script>
  
  <style scoped>
  /* Background color for the whole template */
  .assets-preview {
    background-color: #f0f8ff; /* Sky white blue */
    padding: 0;
    position: relative;
  }
  
  /* Make Asset Images Bigger */
  .asset-image {
    width: 320px; /* Increased size */
    height: 320px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
  }
  
  /* Button Styling */
  .pawn-button {
    width: 200px;
    font-weight: bold;
    color: white;
  }
  
  /* Wave sections */
  .wave-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 100px; /* Ensures waves are visible */
  }
  
  /* Top wave styling - now smoother */
  .top-wave {
    margin-bottom: -2px; /* Ensures smooth transition */
  }
  
  /* Bottom wave styling */
  .bottom-wave {
    margin-top: -5px;
  }
  
  /* Ensure SVG Waves Show */
  .wave-svg {
    width: 100%;
    height: auto; /* Keep proportional height */
    display: block;
    fill: #f0f8ff; /* Matches the background */
  }
  </style>
  