<template>
    <BreadcrumbInfo page-title="Frequently Asked Questions" />
      <!-- FAQ Section -->
      <v-card class="faq-card" elevation="2">
        <v-card-title class="faq-title">Common Questions</v-card-title>
        <v-divider></v-divider>
  
        <v-expansion-panels multiple>
          <v-expansion-panel v-for="(faq, index) in faqs" :key="index">
            <v-expansion-panel-title>
              <v-icon left>mdi-help-circle</v-icon>
              {{ faq.question }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              {{ faq.answer }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
      <!-- Submit Your Question Section -->
      <v-card class="mt-8 submit-card" elevation="2">
        <v-card-title class="faq-title">Have a Question?</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submitQuestion">
            <v-text-field
              v-model="form.name"
              label="Your Name"
              required
              variant="outlined"
            ></v-text-field>
  
            <v-text-field
              v-model="form.email"
              label="Your Email"
              required
              type="email"
              variant="outlined"
            ></v-text-field>
  
            <v-textarea
              v-model="form.question"
              label="Your Question"
              rows="4"
              required
              variant="outlined"
            ></v-textarea>
  
            <v-btn color="primary" type="submit" block>Submit Question</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
  
      <!-- Confirmation Snackbar -->
      <v-snackbar v-model="snackbar" color="success" timeout="3000">
        Your question has been submitted successfully!
      </v-snackbar>
   
  </template>
  
  <script setup>
  import { ref } from "vue";
  import BreadcrumbInfo from "@/components/Contact/BreadcrumbInfo.vue";
  
  const faqs = ref([
    {
      question: "How do I apply for a loan?",
      answer: "You can apply for a loan by visiting our application page and filling out the required information.",
    },
    {
      question: "What are the eligibility requirements?",
      answer: "You must be at least 18 years old with a valid ID and proof of income to qualify for a loan.",
    },
    {
      question: "How long does the approval process take?",
      answer: "The approval process typically takes 24-48 hours depending on the completeness of your application.",
    },
    {
      question: "Can I repay my loan early?",
      answer: "Yes, you can repay your loan early without any penalties.",
    },
  ]);
  
  // Form Data
  const form = ref({
    name: "",
    email: "",
    question: "",
  });
  
  // Snackbar State
  const snackbar = ref(false);
  
  // Submit Form Handler
  const submitQuestion = () => {
    console.log("Form Submitted:", form.value);
  
    // Clear form after submission
    form.value = { name: "", email: "", question: "" };
  
    // Show success message
    snackbar.value = true;
  };
  </script>
  
  <style scoped>
  .faq-card,
  .submit-card {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
  }
  
  .faq-title {
    font-size: 1.8rem;
    font-weight: bold;
    color: #121536;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .v-expansion-panel-title {
    font-weight: bold;
    background-color: #f9f9f9;
    border-bottom: 1px solid #ddd;
    transition: background-color 0.3s ease;
  }
  
  .v-expansion-panel-title:hover {
    background-color: #e6f7ff; /* Subtle hover effect */
  }
  
  .v-expansion-panel-text {
    padding: 10px 20px;
    color: #555;
  }
  
  .v-btn {
    background-color: #121536;
    color: white;
    font-weight: bold;
    text-transform: capitalize;
  }
  
  .v-btn:hover {
    background-color: #1e2b5b;
  }
  
  .v-snackbar {
    font-weight: bold;
    text-align: center;
  }
  </style>
  