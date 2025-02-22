<template>
    <v-container class="illustrative-example">
      <h2 class="section-title">Illustrative example</h2>
      <p class="description">Client borrows N$10,000 for 90 days.</p>
  
      <v-table class="loan-table">
        <thead>
          <tr>
            <th>Loan Amount</th>
            <th>Repayment Period</th>
            <th>Monthly Repayment</th>
            <th>Total Cost of Loan</th>
            <th>Initiation Fee</th>
            <th>Monthly Fee (Interest + Service Charge)</th>
            <th>APR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>N$10,000</td>
            <td>3 months</td>
            <td>N$560</td>
            <td>N$12,370</td>
            <td>N$1,000</td>
            <td>N$650</td>
            <td>60%</td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </template>
  
  <style scoped>
  .illustrative-example {
    text-align: center;
    padding: 40px 0;
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: 600;
    color: #333;
  }
  
  .description {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 20px;
  }
  
  .loan-table {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    border-collapse: collapse;
  }
  
  .loan-table thead {
    background-color: #eeeeee;
    font-weight: bold;
  }
  
  .loan-table th,
  .loan-table td {
    padding: 12px;
    text-align: center;
  }
  
  .loan-table tbody tr {
    background-color: #f9f5f5;
  }
  </style>
  