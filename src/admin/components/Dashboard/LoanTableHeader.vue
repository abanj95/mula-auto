<template>
    <v-row class="mb-4">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="searchQuery"
          label="Search Applicants"
          prepend-inner-icon="mdi-magnify"
          outlined
          dense
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          v-model="statusFilter"
          :items="['All', 'Pending', 'Approved', 'Rejected']"
          label="Filter by Status"
          outlined
          dense
        />
      </v-col>
    </v-row>
  </template>
  
  <script setup>
  import { defineModel } from 'vue';
  
  const searchQuery = defineModel('searchQuery');
  const statusFilter = defineModel('statusFilter');
  </script>
  