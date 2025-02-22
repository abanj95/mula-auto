<template>
    <v-card>
    <v-img :src="`http://localhost:3001/showroom_uploads/${props.vehicle.main_image}`" height="200px" cover></v-img>
      <v-card-title>{{ props.vehicle.title }}</v-card-title>
      <v-card-actions>
        <v-btn @click="viewVehicleDetails(vehicle.id)" variant="outlined">View Details</v-btn>
        <v-spacer></v-spacer> 
      <div class="price" color="primary">N$ {{ formatPrice(vehicle.price) }}</div>
      </v-card-actions> 
    </v-card>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { defineProps } from 'vue';
  
  const router = useRouter();
  const props = defineProps({
    vehicle: Object,
  });

  const formatPrice = (price) => {
  return parseFloat(price).toLocaleString();
};
  const viewVehicleDetails = (id) => {
    router.push({ name: 'VehicleDetails', params: { id } });
  };
  </script>
  <style scoped>
  .price {
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
  }
  </style>