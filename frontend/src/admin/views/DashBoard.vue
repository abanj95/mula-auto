<template>
  <v-container fluid class="dashboard-container">
    <!-- Cards Section -->
    <v-row justify="center" align="center" class="dashboard-row">
      <v-col cols="12" sm="6" md="3" v-for="(card, index) in cards" :key="index">
        <DashboardCards :title="card.title" :value="card.value" :icon="card.icon" :color="card.color" />
      </v-col>
    </v-row>

    <!-- Table Section -->
    <v-row justify="center" class="mt-5">
      <v-col cols="12">
        <LoanTable />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import DashboardCards from '../components/Dashboard/DashboardCards.vue';
import LoanTable from '../components/Dashboard/LoanTable.vue';
import { ref } from 'vue';

const cards = ref([
  { icon: 'mdi-cash-multiple', color: 'primary', title: 'Total Loans', value: 152 },
  { icon: 'mdi-timer-sand', color: 'orange', title: 'Pending Loans', value: 34 },
  { icon: 'mdi-check-circle', color: 'green', title: 'Approved Loans', value: 89 },
  { icon: 'mdi-close-circle', color: 'red', title: 'Rejected Loans', value: 29 }
]);
</script>

<style scoped>
.dashboard-container {
  width: 100%;
  padding: 20px;
}

.dashboard-row {
  justify-content: center !important;
}

.mt-5 {
  margin-top: 30px !important;
}
</style>
