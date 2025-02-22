<template>
    <BreadcrumbInfo page-title="Complaints" />
  
    <v-container class="complaints-section" fluid>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h1 class="title">Complaints Procedure</h1>
          <p>
            At <strong>Mula Channels</strong>, your trust is our foundation. We aim to offer top-tier services, always grounded in transparency and a commitment to fostering enduring relationships. While we consistently aim for excellence, there might be moments when our services fall short of your expectations or when you question our adherence to legal and industry norms.
          </p>
  
          <!-- Collapsible Internal Complaint Procedure -->
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>
                Internal Complaint Procedure
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <h2>Introduction</h2>
                <p>
                  Mula Channels is committed to providing high-quality financial services. Occasionally, there may be times when our service does not meet expectations. This procedure outlines how complaints should be addressed to ensure swift resolution and continuous improvement.
                </p>
  
                <h2>Scope</h2>
                <p>
                  This procedure applies to all complaints received from customers, employees, or other parties related to Mula Channels and its services.
                </p>
  
                <h2>Definitions</h2>
                <p>
                  <strong>Complaint:</strong> An expression of dissatisfaction about the service, actions, or lack of action by Mula Channels or its representatives.
                </p>
  
                <h2>Roles & Responsibilities</h2>
                <p>
                  <strong>Complaints Officer:</strong> Responsible for ensuring effective complaint handling and reports to the Managing Director.<br />
                  <strong>All Employees and Agents:</strong> Expected to treat complaints seriously and respond promptly and courteously.
                </p>
  
                <h2>Procedure</h2>
                <ol>
                  <li><strong>Receiving the Complaint:</strong> Complaints can be submitted via email (<a href="mailto:complaints@mulachannels.com">complaints@mulachannels.com</a>), phone (+264 853 564 681), or in person at our branches.</li>
                  <li><strong>Recording the Complaint:</strong> All complaints are documented in the Complaint Register with relevant details.</li>
                  <li><strong>Investigating the Complaint:</strong> The Complaints Officer conducts thorough investigations, including staff interviews and record reviews.</li>
                  <li><strong>Resolving the Complaint:</strong> Actions may include apologies, fee reductions, reimbursements, or corrective measures.</li>
                  <li><strong>Responding to the Complaint:</strong> The outcome, reasons, and actions taken will be communicated to the complainant.</li>
                </ol>
  
                <h2>Timeframes</h2>
                <ul>
                  <li><strong>Acknowledgment:</strong> Within 2 business days.</li>
                  <li><strong>Investigation & Resolution:</strong> Within 7 business days.</li>
                </ul>
                <p>
                  If more time is needed, the complainant will be informed of the delay and provided with an updated timeframe.
                </p>
  
                <h2>Confidentiality</h2>
                <p>
                  All complaints will be handled confidentially. Information will only be shared with individuals involved in resolving the complaint.
                </p>
  
                <h2>Training</h2>
                <p>
                  Complaint handling training is provided during employee onboarding and as part of annual refresher programs.
                </p>
  
                <h2>Review</h2>
                <p>
                  This procedure is reviewed annually to ensure it remains effective and compliant with legal requirements.
                </p>
  
                <h2>Reporting</h2>
                <p>
                  Quarterly reports on complaints will be prepared by the Complaints Officer and submitted to the Managing Director.
                </p>
  
                <p>
                  This procedure serves as a guide and does not limit Mula Channels’ discretion to address complaints in a manner deemed appropriate.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
  
          <!-- Complaint Submission Form -->
          <v-card class="mt-6 pa-4" elevation="3">
            <h3>Submit a Complaint</h3>
            <v-form @submit.prevent="submitComplaint">
              <v-text-field v-model="name" label="Your Name" required></v-text-field>
              <v-text-field v-model="email" label="Email" required></v-text-field>
              <v-textarea v-model="message" label="Describe Your Complaint" rows="4" required></v-textarea>
  
              <v-btn color="primary" type="submit" class="mt-3">Submit Complaint</v-btn>
            </v-form>
  
            <v-snackbar v-model="snackbar" color="green" top right>
              Complaint submitted successfully!
            </v-snackbar>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import BreadcrumbInfo from "@/components/Contact/BreadcrumbInfo.vue";
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  const snackbar = ref(false);
  
  const submitComplaint = () => {
    // Simulated submission process
    console.log('Complaint Submitted:', { name: name.value, email: email.value, message: message.value });
    snackbar.value = true;
  
    // Reset form
    name.value = '';
    email.value = '';
    message.value = '';
  };
  </script>
  
  <style scoped>
  .complaints-section {
    padding: 20px;
    font-family: "Arial", sans-serif;
    color: #333;
  }
  
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #121536;
    margin-bottom: 15px;
    text-align: center;
  }
  
  h2 {
    color: #121536;
    margin-top: 20px;
    font-size: 1.5rem;
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 10px;
  }
  
  ul, ol {
    padding-left: 20px;
    margin-bottom: 15px;
  }
  
  li {
    margin-bottom: 8px;
  }
  
  .v-expansion-panels {
    margin-top: 20px;
  }
  
  .v-card {
    background-color: #f9f9f9;
  }
  
  .v-btn {
    background-color: #121536;
    color: white;
  }
  </style>
  