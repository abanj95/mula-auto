<template>
    <v-row class="mb-4" align="center" justify="space-between">
      <v-col cols="12" sm="6">
        <v-text-field v-model="search" label="Search Vehicles" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-select
          v-model="brand"
          :items="brands"
          label="Filter by Brand"
          outlined
          dense
          clearable
        ></v-select>
      </v-col>
    </v-row>
  </template>
  
  <script setup>
  import { ref, watch, defineEmits } from 'vue';
  
  const emit = defineEmits(['update:search', 'update:brand']);
  const search = ref('');
  const brand = ref('');
  const brands = ref(['Toyota', 'BMW', 'Ford', 'Mercedes', 'Honda']); 
  
  watch(search, (newVal) => emit('update:search', newVal));
  watch(brand, (newVal) => emit('update:brand', newVal));
  </script>
  