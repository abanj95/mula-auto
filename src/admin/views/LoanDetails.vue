<template>
    <v-container>
      <v-card class="pa-5">
        <!-- Loader -->
        <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
  
        <div v-else>
          <v-row>
            <!-- Applicant Details -->
            <v-col cols="12" md="6">
              <v-card class="pa-4 info-card">
                <v-card-title class="title">📌 Applicant Information</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="info-list">
                  <p><span>Name:</span> {{ loan.applicant_name }}</p>
                  <p><span>Email:</span> {{ loan.applicant_email }}</p>
                  <p><span>Phone:</span> {{ loan.applicant_phone }}</p>
                  <p><span>Loan Amount:</span> ${{ formatNumber(loan.loan_amount) }}</p>
                  <p><span>Status:</span> <LoanStatusBadge :status="loan.loan_status" /></p>
                  <p><span>Date Applied:</span> {{ formatDate(loan.date_applied) }}</p>
                </v-card-text>
              </v-card>
            </v-col>
  
            <!-- Vehicle Details -->
            <v-col cols="12" md="6">
              <v-card class="pa-4 info-card">
                <v-card-title class="title">🚗 Vehicle Information</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="info-list">
                  <p><span>Brand:</span> {{ loan.vehicle_brand }}</p>
                  <p><span>Model:</span> {{ loan.vehicle_model }}</p>
                  <p><span>Year:</span> {{ loan.vehicle_year || 'N/A' }}</p>
                  <p><span>Mileage:</span> {{ loan.vehicle_mileage ? formatNumber(loan.vehicle_mileage) + ' km' : 'N/A' }}</p>
                  <p><span>Purchase Type:</span> {{ loan.purchase_type || 'N/A' }}</p>
                  <p><span>Current Car Value:</span> ${{ loan.vehicle_value ? formatNumber(loan.vehicle_value) : 'N/A' }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
  
          <v-divider class="my-4"></v-divider>
  
          <!-- Images Section -->
          <v-card class="pa-4">
  <v-card-title class="title">📷 Uploaded Vehicle Images</v-card-title>
  <v-divider></v-divider>
  <v-container>
    <v-row>
      <v-col v-for="(image, index) in loan.vehicle_images" :key="index" cols="12" sm="4">
        <v-card class="image-card">
          <v-img v-if="image" :src="image" height="200px" contain></v-img>
          <v-card-actions class="actions">
            <v-btn icon @click="previewImage(image)">
              <v-icon>mdi-eye</v-icon>
            </v-btn>
            <v-btn icon :href="image" download>
              <v-icon>mdi-download</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-card>

  
          <v-divider class="my-4"></v-divider>
  
          <!-- Actions -->
          <LoanActions :loan="loan" @approve="approveLoan" @reject="rejectLoan" />
        </div>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import LoanStatusBadge from '../components/Dashboard/LoanStatusBadge.vue';
  import LoanActions from '../components/LoanDetails/LoanActions.vue';
  
  const route = useRoute();
  const loan = ref(null);
  const loading = ref(true);
  
  onMounted(async () => {
    const loanId = route.params.id;
    console.log("Loan ID from Route:", loanId);
  
    try {
      const response = await fetch(`http://localhost:3001/api/loans/${loanId}`);
      const data = await response.json();
      console.log("Fetched Loan Details:", data);
  
      loan.value = data;
    } catch (error) {
      console.error('Error fetching loan details:', error);
    } finally {
      loading.value = false;
    }
  });
  
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  
  // Format numbers with commas
  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };
  
  // Preview Image
  const previewImage = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };
  
  const approveLoan = () => {
    console.log('Loan approved:', loan.value);
  };
  
  const rejectLoan = () => {
    console.log('Loan rejected:', loan.value);
  };
  </script>
  
  <style scoped>
  /* General Card Styling */
  .v-card {
    border-radius: 10px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.08);
  }
  
  /* Section Titles */
  .title {
    font-weight: bold;
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  /* Applicant & Vehicle Info Cards */
  .info-card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
  }
  
  .info-list p {
    font-size: 1rem;
    margin: 8px 0;
  }
  
  .info-list span {
    font-weight: bold;
    color: #444;
  }
  
  /* Image Cards */
  .image-card {
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
  }
  
  .image-card:hover {
    transform: scale(1.02);
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
  }
  </style>
  