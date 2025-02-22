<template>
    <v-container class="loan-steps-container">
      <v-row justify="center" align="center" no-gutters>
        <v-col v-for="(step, index) in steps" :key="index" cols="12" md="6" lg="3" class="step-wrapper">
          <div class="step">
            <div class="step-number">{{ step.number }}</div>
            <v-icon class="step-icon">{{ step.icon }}</v-icon>
            
            <div class="step-text">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const steps = ref([
    {
      number: "1",
      icon: "mdi-home",
      title: "Prepare at home",
      description: "Your car must be fully paid.",
    },
    {
      number: "2",
      icon: 'mdi-file',
      title: "Have your documents",
      description: "Copy of your ID and proof of residence.",
    },
    {
      number: "3",
      icon: "mdi-office-building",
      title: "Sign docs - funds are paid",
      description: "Loan agreement is signed.",
    },
    {
      number: "4",
      icon: "mdi-car",
      title: "Settle loan & get car back",
      description: "Complete payments and retrieve car.",
    },
  ]);
  </script>
  
  <style scoped>
  .loan-steps-container {
    display: flex;
    justify-content: center;
    padding: 40px 0;
    background-color: white;
  }
  
  .step-wrapper {
    display: flex;
    justify-content: center;
  }
  
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .step-number {
    background-color: #111432;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 12px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  .step-icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #111432;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .step-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }
  
  .step-description {
    font-size: 1rem;
    color: #555;
  }
  </style>
  