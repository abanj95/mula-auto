<template>
    <v-card class="pa-4">
      <h3>Contact Seller</h3>
      <v-text-field label="Your Name" v-model="name" outlined dense></v-text-field>
      <v-text-field label="Your Email" v-model="email" outlined dense></v-text-field>
      <v-textarea label="Message" v-model="message" outlined dense></v-textarea>
      <v-btn color="primary" @click="sendInquiry">Send Inquiry</v-btn>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  
  const sendInquiry = () => {
    alert(`Message sent successfully!`);
  };
  </script>
  