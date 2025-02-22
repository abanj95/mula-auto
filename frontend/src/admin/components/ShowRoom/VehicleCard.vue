<template>
    <v-card class="ma-2" outlined>
      <v-img :src="vehicle.main_image" height="200px" cover></v-img>
      <v-card-title>{{ vehicle.title }}</v-card-title>
      <v-card-subtitle>${{ vehicle.price }}</v-card-subtitle>
      <v-chip :color="vehicle.status === 'Sold' ? 'red' : 'green'" class="ma-2">{{ vehicle.status }}</v-chip>
  
      <v-card-actions>
        <v-btn color="primary" @click="$emit('edit', vehicle)">Edit</v-btn>
        <v-btn color="red" @click="$emit('delete', vehicle.id)">Delete</v-btn>
        <v-btn
          color="orange"
          v-if="vehicle.status === 'Available'"
          @click="$emit('markSold', vehicle.id)"
        >
          Mark as Sold
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script setup>
import { defineProps } from 'vue';

  defineProps(['vehicle']);
  </script>
  