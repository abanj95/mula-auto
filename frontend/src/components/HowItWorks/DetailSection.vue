<template>
    <v-container fluid class="details-section">
      <v-row>
        <v-col cols="12">
          <h2 class="section-title">How to pawn your car</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3" v-for="(detail, index) in details" :key="index">
          <div class="detail-card">
            <div class="detail-header">
              <v-icon size="36">{{ detail.icon }}</v-icon>
              <h3 class="detail-title">{{ detail.title }}</h3>
            </div>
            <ul class="detail-list">
              <li v-for="(item, idx) in detail.items" :key="idx">{{ item }}</li>
            </ul>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-4">
        <v-btn color="red" dark large>Start your application</v-btn>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  const details = [
    {
      icon: 'mdi-home',
      title: 'Prepare At Home',
      items: [
        'Your car must be fully paid',
        'Owner must apply and sign the loan agreement',
        'Submit information online or call us'
      ]
    },
    {
      icon: 'mdi-file',
      title: 'Have Your Documents',
      items: [
        'Copy of ID and proof of residence',
        'Original registration certificate',
        'Company-owned vehicles: Contact us for specifics'
      ]
    },
    {
      icon: 'mdi-office-building',
      title: 'Come To Our Office',
      items: [
        'Bring documents and vehicle for evaluation',
        'Sign loan agreement if satisfied',
        'Car is stored securely'
      ]
    },
    {
      icon: 'mdi-car',
      title: 'Get Your Car Back',
      items: [
        'Pay monthly charges and capital back',
        'Collect car and documents upon payment'
      ]
    }
  ];
  </script>
  
  <style scoped>
  .details-section {
    background-color: #111432;
    color: white;
    padding: 40px 0;
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .detail-card {
    background: #242956;
    border-radius: 8px;
    padding: 20px;
    color: white;
    margin-bottom: 20px;
  }
  
  .detail-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .detail-title {
    margin-left: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .detail-list {
    padding-left: 20px;
    list-style: disc;
  }
  
  .detail-list li {
    margin-bottom: 5px;
    font-size: 0.9rem;
  }
  </style>
  