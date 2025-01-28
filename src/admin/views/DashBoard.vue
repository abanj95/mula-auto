<template>
    <v-container fluid>
      <!-- Dashboard Title -->
      <v-row>
        <v-col>
          <h1>Welcome to the Admin Dashboard</h1>
        </v-col>
      </v-row>
  
      <!-- Dashboard Metrics -->
      <v-row>
        <v-col cols="12" md="3">
          <v-card outlined>
            <v-card-title>Applications Submitted</v-card-title>
            <v-card-subtitle>100</v-card-subtitle>
          </v-card>
        </v-col>
  
        <v-col cols="12" md="3">
          <v-card outlined>
            <v-card-title>Approved Loans</v-card-title>
            <v-card-subtitle>50</v-card-subtitle>
          </v-card>
        </v-col>
  
        <v-col cols="12" md="3">
          <v-card outlined>
            <v-card-title>Pending Applications</v-card-title>
            <v-card-subtitle>30</v-card-subtitle>
          </v-card>
        </v-col>
  
        <!-- Add more metrics as necessary -->
      </v-row>
      
      <!-- You can add more sections like recent activities, latest applications, etc. -->
    </v-container>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped>
  /* Add any styling for the dashboard cards */
  </style>
  