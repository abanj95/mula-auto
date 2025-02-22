<template>
    <v-card class="pa-6 mt-6 contact-info" elevation="2">
      <v-list dense>
        <v-list-item>
          <v-list-item-title class="text-h6 font-weight-bold mb-3">Our Email</v-list-item-title>
          <v-list-item-subtitle>
            <v-icon color="primary" class="mr-2">mdi-email</v-icon>
            enquiries@yourcompany.com
          </v-list-item-subtitle>
        </v-list-item>
  
        <v-divider class="my-3"></v-divider>
  
        <v-list-item>
          <v-list-item-title class="text-h6 font-weight-bold mb-3">Call Centre</v-list-item-title>
          <v-list-item-subtitle>
            <v-icon color="primary" class="mr-2 mb-2">mdi-clock-outline</v-icon>
            Office Hours: 08:30 - 17:30
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-icon color="primary" class="mr-2 mb-2">mdi-phone</v-icon>
            +264 (0) 61 225 352
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-icon color="primary" class="mr-2">mdi-phone-classic</v-icon>
            24/7 Line: +264 (0) 81 700 9826
          </v-list-item-subtitle>
        </v-list-item>
  
        <v-divider class="my-3"></v-divider>
  
        <v-list-item>
          <v-list-item-title class="text-h6 font-weight-bold mb-3">Network With Us</v-list-item-title>
          <div class="social-icons">
            <v-btn icon class="mx-1"><v-icon>mdi-facebook</v-icon></v-btn>
            <v-btn icon class="mx-1"><v-icon>mdi-instagram</v-icon></v-btn>
            <v-btn icon class="mx-1"><v-icon>mdi-youtube</v-icon></v-btn>
            <v-btn icon class="mx-1"><v-icon>mdi-whatsapp</v-icon></v-btn>
          </div>
        </v-list-item>
  
        <v-divider class="my-3"></v-divider>
  
        <v-list-item>
          <v-list-item-title class="text-h6 font-weight-bold mb-3">Our Addresses</v-list-item-title>
          <v-list-item-subtitle>
            <v-icon color="primary" class="mr-2 mb-2">mdi-map-marker</v-icon>
            P.O. Box 65790 Katutura, Windhoek
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-icon color="primary" class="mr-2">mdi-office-building</v-icon>
            Erf R/260W, Shop 3, Ellmer building, Windhoek
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card>
  </template>
  
  <style scoped>
  .contact-info {
    border-radius: 12px;
  }
  .social-icons v-btn {
    color: #111432;
  }
  </style>
  