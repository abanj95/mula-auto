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
    <PawnFormStep2 v-if="currentStep === 2" v-model:form="form" @preview="openPreview" />

    <!-- Navigation Buttons -->
    <v-row justify="space-between" class="mt-4 mb-3">
      <v-btn v-if="currentStep === 2" @click="prevStep" color="grey darken-1">Back</v-btn>
      <v-btn v-if="currentStep === 1" @click="nextStep" color="primary">Next</v-btn>
      <v-btn v-if="currentStep === 2" @click="submitPawnApplication" color="green" :loading="submitting">Submit</v-btn>
    </v-row>
  </v-container>

  <!-- Image Preview Dialog -->
  <v-dialog v-model="showImagePreview" max-width="600px">
    <v-card>
      <v-card-title class="headline">Uploaded Image</v-card-title>
      <v-card-text>
        <v-img :src="previewImage" contain max-height="400px"></v-img>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="primary" text @click="showImagePreview = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
<!-- Success Dialog -->
<v-dialog v-model="successDialog" max-width="400px">
  <v-card>
    <v-card-title class="headline green--text">Application Submitted</v-card-title>
    <v-card-text>
      Your loan application has been submitted successfully!
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="green darken-1" text @click="successDialog = false">OK</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>

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
const showImagePreview = ref(false);
const previewImage = ref("");

// Move to Next Step (Validate Step 1)
const nextStep = () => {
  if (!validateStep1()) {
    showErrorDialog.value = true;
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

// Open Image Preview
const openPreview = (imageUrl) => {
  previewImage.value = imageUrl;
  showImagePreview.value = true;
};

// Submit Application (Validation in Step 2)
const submitting = ref(false);
const successDialog = ref(false); // For the success message

const submitPawnApplication = async () => {
  if (!validateStep2()) {
    showErrorDialog.value = true;
    return;
  }

  submitting.value = true; // Show loading indicator

  try {
    const formData = new FormData();
    formData.append("name", form.value.name);
    formData.append("cellphone", form.value.cellphone);
    formData.append("email", form.value.email);
    formData.append("town", form.value.town);
    formData.append("vehicleBrand", form.value.vehicleBrand);
    formData.append("year", form.value.year);
    formData.append("mileage", form.value.mileage);
    formData.append("purchaseMethod", form.value.purchaseMethod);
    formData.append("carValue", form.value.carValue);
    formData.append("loanAmount", form.value.loanAmount);

    // Append images
    for (const key in form.value.vehicleImages) {
      if (form.value.vehicleImages[key]) {
        formData.append("images", form.value.vehicleImages[key]);
      }
    }

    const response = await fetch("http://localhost:3001/api/loans", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Submission Response:", data);

    // Clear form after success
    resetForm();

    // Show success message
    successDialog.value = true;
  } catch (error) {
    console.error("Error submitting loan application:", error);
  } finally {
    submitting.value = false;
  }
};

// Reset Form Function
const resetForm = () => {
  form.value = {
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
  };
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
