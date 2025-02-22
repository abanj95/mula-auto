<template>
    <v-container fluid class="loan-value-section">
      <v-row>
        <v-col cols="12">
          <h2 class="section-title">Maximise your loan value</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <ul class="loan-tips">
            <li>Have your service record handy</li>
            <li>Ensure the tyres are in good shape</li>
            <li>Ensure your spare tyre and jack is with the vehicle</li>
            <li>Ensure you have your spare key</li>
            <li>Ensure your licence is up to date</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .loan-value-section {
    background-color: white;
    padding: 40px 0;
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .loan-tips {
    list-style: none;
    padding-left: 0;
  }
  
  .loan-tips li {
    font-size: 1rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  
  .loan-tips li::before {
    content: '\2022';
    color: red;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 10px;
  }
  </style>
  