<template>
    <v-container class="service-overview my-16" fluid>
      <v-row>
        <!-- Title Section -->
        <v-col cols="12" class="text-center">
          <h2 class="service-title">Our Services</h2>
          <p class="service-subtitle">Explore the range of services we offer to support your financial needs.</p>
        </v-col>
  
        <!-- Service 1: Auto Pawn -->
        <v-col cols="12" md="4">
          <v-card class="service-card" variant="outlined" color="white">
            <v-card-title>
              <v-icon class="mr-3" color="primary">mdi-car</v-icon>
              Auto Pawn
            </v-card-title>
            <v-card-text>
              Secure a loan by using your vehicle as collateral. Flexible terms and quick processing.
            </v-card-text>
          </v-card>
        </v-col>
  
        <!-- Service 3: Flexible Repayment Plans -->
        <v-col cols="12" md="4">
          <v-card class="service-card" variant="outlined" color="white" >
            <v-card-title>
              <v-icon class="mr-3" color="primary">mdi-calendar</v-icon>
              Flexible Repayment Plans
            </v-card-title>
            <v-card-text>
              Choose a repayment plan that suits your budget. We offer terms ranging from 1 to 3 months.
            </v-card-text>
          </v-card>
        </v-col>
  
        <!-- Service 4: Asset Valuation -->
        <v-col cols="12" md="4">
          <v-card class="service-card" variant="outlined" color="white" >
            <v-card-title>
              <v-icon class="mr-3" color="primary">mdi-scale-balance</v-icon>
              Asset Valuation
            </v-card-title>
            <v-card-text>
              Get a free valuation of your vehicle and find out how much you can borrow.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped>
  .service-overview {
    background-color: #121536;
    padding: 40px;
  }
  
  .service-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
  }
  
  .service-subtitle {
    font-size: 1.2rem;
    margin-bottom: 40px;
    color: whitesmoke;
  }
  
  .service-card {
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  .service-card .v-icon {
    font-size: 2rem;
  }
  </style>
  