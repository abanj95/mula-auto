<template>
  <!-- <HeroSection /> -->
  <BreadcrumbInfo page-title="How it Works"/>
    <v-container fluid>
      <!-- Hero Section -->
    <v-row>
        <v-col>
            <!-- steps -->
            <LoanSteps />
        </v-col>
        <v-col>
            <!-- Loan tips Section -->
            <LoanValueTips />
        </v-col>
    </v-row>
      
      <!-- Details Section -->
      <DetailsSection />
      <!-- Loan illustration -->
       <LoanIllustration />
    </v-container>
  </template>
  
  <script setup>
//   import HeroSection from "../components/HowItWorks/HeroSection.vue";
  import LoanSteps from "../components/HowItWorks/LoanSteps.vue";
  import DetailsSection from "../components/HowItWorks/DetailSection.vue";
  import LoanValueTips from "../components/HowItWorks/LoanValueTips.vue";
  import LoanIllustration from "@/components/HowItWorks/LoanIllustration.vue";
  import BreadcrumbInfo from "@/components/Contact/BreadcrumbInfo.vue";
  </script>
  
  <style scoped>
  /* General Styling */
  </style>
  