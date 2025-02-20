<template>
    <v-chip :color="statusColor" dark>
      {{ status }}
    </v-chip>
  </template>
  
  <script setup>
  import { computed, defineProps } from 'vue';
  
  const props = defineProps({
    status: String
  });
  
  const statusColor = computed(() => {
    switch (props.status) {
      case 'Pending': return 'warning';
      case 'Approved': return 'green';
      case 'Rejected': return 'red';
      default: return 'gray';
    }
  });
  </script>
  