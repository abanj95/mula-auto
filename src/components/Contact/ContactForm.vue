<template>
    <v-card class="pa-6 contact-form" flat>
      <v-card-title class="text-h5 font-weight-bold">Feel free to ask for details!</v-card-title>
      <v-card-subtitle class="mb-4">Don't save any questions!</v-card-subtitle>
  
      <v-form ref="contactForm" v-model="valid">
        <v-text-field v-model="name" label="Name" required outlined></v-text-field>
        <v-text-field v-model="email" label="Email" required outlined></v-text-field>
        <v-text-field v-model="phone" label="Tel Nr" required outlined></v-text-field>
  
        <v-select
          v-model="department"
          label="Select the most relevant department"
          :items="departments"
          required
          outlined
        ></v-select>
  
        <v-textarea v-model="message" label="Message" required outlined></v-textarea>
  
        <v-checkbox v-model="captcha" label="I am not a robot" class="mt-4"></v-checkbox>
  
        <v-btn :disabled="!valid" color="primary" block @click="submitForm">
          Send Message
          <v-icon right>mdi-send</v-icon>
        </v-btn>
      </v-form>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const phone = ref('');
  const department = ref('');
  const message = ref('');
  const captcha = ref(false);
  const valid = ref(false);
  
  const departments = [
    'Customer Support',
    'Sales',
    'Technical Support',
    'Other'
  ];
  
  const submitForm = () => {
    if (valid.value) {
      alert('Message sent successfully!');
    }
  };
  </script>
  
  <style scoped>
  .contact-form {
    border-radius: 12px;
  }
  </style>
  