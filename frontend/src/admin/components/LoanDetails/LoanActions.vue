<template>
    <v-row justify="space-between">
      <v-btn color="red" @click="$emit('reject')">Reject</v-btn>
      <v-btn color="green" @click="$emit('approve')">Approve</v-btn>
      <v-btn color="gray" @click="goBack">Back</v-btn>
    </v-row>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { defineEmits } from 'vue';
  
  defineEmits(['approve', 'reject']);
  
  const router = useRouter();
  const goBack = () => router.go(-1);
  </script>
  