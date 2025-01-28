<template>
    <BreadcrumbInfo page-title="Pawn Your Vehicle" />
  
    <v-container>
      <!-- Stepper -->
      <v-stepper v-model="currentStep" class="custom-stepper mb-3 mt-3" flat>
        <v-stepper-header>
          <v-stepper-step :complete="currentStep > 1" step="1" class="step-circle">1</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" class="step-circle">2</v-stepper-step>
        </v-stepper-header>
      </v-stepper>
  
      <!-- Step 1: Personal & Vehicle Details -->
      <PawnFormStep1 v-if="currentStep === 1" v-model:form="form" />
  
      <!-- Step 2: Upload Vehicle Images -->
      <PawnFormStep2 v-if="currentStep === 2" v-model:form="form" />
  
      <!-- Navigation Buttons -->
      <v-row justify="space-between" class="mt-4 mb-3">
        <v-btn v-if="currentStep === 2" @click="prevStep" color="grey darken-1">Back</v-btn>
        <v-btn v-if="currentStep === 1" @click="nextStep" color="primary">Next</v-btn>
        <v-btn v-if="currentStep === 2" @click="submitPawnApplication" color="green">Submit</v-btn>
      </v-row>
    </v-container>
  
    <!-- Missing Information Dialog -->
    <v-dialog v-model="showErrorDialog" max-width="400px">
      <v-card>
        <v-card-title class="headline red--text">Missing Information</v-card-title>
        <v-card-text>
          Please fill in all required fields before proceeding.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="primary" text @click="showErrorDialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import PawnFormStep1 from "@/components/ApplyComponent/PawnFormStep1.vue";
  import PawnFormStep2 from "@/components/ApplyComponent/PawnFormStep2.vue";
  import BreadcrumbInfo from "@/components/Contact/BreadcrumbInfo.vue";
  
  // Step tracking
  const currentStep = ref(1);
  
  // Form Data
  const form = ref({
    name: "",
    cellphone: "",
    email: "",
    town: "",
    vehicleBrand: "",
    year: "",
    mileage: "",
    purchaseMethod: "",
    carValue: "",
    loanAmount: "",
    vehicleImages: {
      front: null,
      back: null,
      left: null,
      right: null,
      engine: null,
      interior: null,
    },
  });
  
  // Dialog state
  const showErrorDialog = ref(false);
  
  // Move to Next Step (Validate Step 1)
  const nextStep = () => {
    if (!validateStep1()) {
      showErrorDialog.value = true; // Show dialog instead of alert
      return;
    }
    currentStep.value = 2;
  };
  
  // Move Back to Step 1
  const prevStep = () => {
    currentStep.value = 1;
  };
  
  // Validate Step 1 Fields
  const validateStep1 = () => {
    return (
      form.value.name &&
      form.value.cellphone &&
      form.value.email &&
      form.value.town &&
      form.value.vehicleBrand &&
      form.value.year &&
      form.value.mileage &&
      form.value.purchaseMethod &&
      form.value.carValue &&
      form.value.loanAmount
    );
  };
  
  // Submit Application (Validation in Step 2)
  const submitPawnApplication = () => {
    if (!validateStep2()) {
      showErrorDialog.value = true; // Show dialog for missing images
      return;
    }
    console.log("Form submitted", form.value);
  };
  
  // Validate Step 2 Fields
  const validateStep2 = () => {
    return Object.values(form.value.vehicleImages).every((image) => image !== null);
  };
  </script>
  
  <style scoped>
  .custom-stepper {
    background-color: white;
    border-radius: 8px;
  }
  
  .step-circle {
    width: 40px !important;
    height: 40px !important;
    border-radius: 50%;
    background-color: #121536 !important;
    color: white !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-weight: bold !important;
    font-size: 18px !important;
  }
  
  .v-stepper-step--active .step-circle {
    background-color: blue !important;
    color: white !important;
  }
  </style>
  