<template>
    <v-card class="loan-info-card pa-4">
      <v-card-title>
        <v-icon class="mr-2">mdi-account</v-icon> Loan Applicant Details
      </v-card-title>
      <v-divider></v-divider>
  
      <v-card-text>
        <v-row dense>
          <v-col cols="12" md="6">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="info-label">Applicant Name</v-list-item-title>
                <v-list-item-subtitle>{{ loan?.name }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
  
          <v-col cols="12" md="6">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-car</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="info-label">Vehicle Brand</v-list-item-title>
                <v-list-item-subtitle>{{ loan?.brand }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
  
          <v-col cols="12" md="6">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cash</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="info-label">Loan Amount</v-list-item-title>
                <v-list-item-subtitle>{{ loan?.amount }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
  
          <v-col cols="12" md="6">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-calendar</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="info-label">Date Applied</v-list-item-title>
                <v-list-item-subtitle>{{ loan?.date_applied }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
  
          <v-col cols="12">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-information</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="info-label">Status</v-list-item-title>
                <LoanStatusBadge :status="loan?.status" />
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import LoanStatusBadge from "../Dashboard/LoanStatusBadge.vue";
  import { defineProps } from "vue";
  
  defineProps({
    loan: Object,
  });
  </script>
  
  <style scoped>
  .loan-info-card {
    border-radius: 10px;
    background-color: white;
  }
  
  .info-label {
    font-weight: bold;
  }
  </style>
  