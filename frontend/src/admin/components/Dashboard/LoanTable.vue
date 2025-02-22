<!-- LoanTable.vue -->
<template>
    <v-container>
      <LoanTableHeader v-model:searchQuery="searchQuery" v-model:statusFilter="statusFilter" />
      <v-data-table
  :headers="headers"
  :items="filteredLoans"
  :items-per-page="10"
  class="elevation-1"
>
  <template v-slot:item="{ item }">
    <tr>
      <td>{{ item.name }}</td>
      <td>{{ item.email }}</td>
      <td>{{ item.vehicleBrand }}</td>
      <td>{{ item.loanAmount }}</td>
      <td>
        <LoanStatusBadge :status="item.status" />
      </td>
      <td>{{ item.dateApplied }}</td>
      <td>
        <!-- <LoanTableActions 
          :loan="item" 
          @view="viewLoan"
        /> -->
        <v-btn icon @click="viewLoan(item)">
    <v-icon>mdi-eye</v-icon>
  </v-btn>
      </td>
    </tr>
  </template>
</v-data-table>

    </v-container>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import LoanTableHeader from './LoanTableHeader.vue';
  import LoanStatusBadge from './LoanStatusBadge.vue';
  import { useRouter } from 'vue-router';
//   import LoanTableActions from './LoanStatusBadge.vue';
  
  const router = useRouter();

// my state variables
  const searchQuery = ref('');
  const statusFilter = ref('All');
  const loans = ref(null);
  
  const headers = ref([
    { title: 'Applicant Name', key: 'name' },
    { title: 'Email', key:'email' },
    { title: 'Vehicle Brand', key: 'vehicleBrand' },
    { title: 'Loan Amount', key: 'loanAmount' },
    { title: 'Status', key: 'status' },
    { title: 'Date Applied', key: 'date_applied' },
    { title: 'Actions', key: 'actions', sortable: false }
  ]);
  
//   const loans = ref([
//     { id: 1, name: 'John Doe', vehicleBrand: 'Toyota', loanAmount: '$10,000', status: 'Pending', dateApplied: '2024-01-25' },
//     { id: 2, name: 'Jane Smith', vehicleBrand: 'Honda', loanAmount: '$8,500', status: 'Approved', dateApplied: '2024-01-20' },
//     { id: 3, name: 'Michael Brown', vehicleBrand: 'Ford', loanAmount: '$12,000', status: 'Rejected', dateApplied: '2024-01-15' }
//   ]);
  
// Fetch loan applications from API on mount
const fetchLoans = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/loans');
    const data = await response.json();
    console.log("Fetched Loans:", data); // Debugging step

    loans.value = data.map(loan => ({
      id: loan.loan_id, // Ensure ID is correct
      name: loan.applicant_name, // Map applicant name
      email: loan.email,
      vehicleBrand: loan.vehicle_brand, // Map vehicle brand
      loanAmount: `$${parseFloat(loan.loan_amount).toLocaleString()}`, // Format amount
      status: loan.loan_status, // Map status
      dateApplied: new Date(loan.date_applied).toLocaleDateString(), // Format date
    }));

    console.log("Mapped Loans:", loans.value); // Debugging step
  } catch (error) {
    console.error('Error fetching loans:', error);
  }
};


const filteredLoans = computed(() => {
  if (!loans.value || !Array.isArray(loans.value)) return [];

  return loans.value.filter(loan => {
    const name = loan.name ? loan.name.toLowerCase() : '';
    const matchesSearch = name.includes(searchQuery.value.toLowerCase());

    const status = loan.status ? loan.status : 'Unknown'; 
    const matchesStatus = statusFilter.value === 'All' || status === statusFilter.value;

    return matchesSearch && matchesStatus;
  });
});


  
// ✅ Fetch loans when component mounts
onMounted(fetchLoans);

const viewLoan = (loan) => {
  if (!loan || !loan.id) {
    console.error("Loan ID is missing!", loan);
    return;
  }
  router.push({ name: 'loanDetails', params: { id: loan.id } });
};

  </script>
  