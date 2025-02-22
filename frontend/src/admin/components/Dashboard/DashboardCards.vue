<template>
    <v-card :color="color" class="dashboard-card" variant='tonal'>
        <v-card-text class="card-title">{{ title }}</v-card-text>
        <v-icon center>{{ icon }}</v-icon> 
        <v-card-text class="card-value">{{ value }}</v-card-text>
        
    </v-card>
  </template>
  
  <script setup>
  import {defineProps } from 'vue';

    defineProps({
  title: String,
  value: Number,
  icon: String,
  color: String
});
  </script>
  
  <style scoped>
  .dashboard-card {
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    height: 150px;
  }
  .card-title {
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }
  .card-value {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  </style>
  