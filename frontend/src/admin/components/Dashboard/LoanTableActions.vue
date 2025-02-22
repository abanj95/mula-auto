<template>
    <v-btn icon @click="$emit('view', loan)">
      <v-icon>mdi-eye</v-icon>
    </v-btn>
  </template>
  
  <script setup>
import {defineProps, defineEmits} from 'vue';

  defineProps(["loan"]);
  defineEmits(["view"]);
  </script>
  