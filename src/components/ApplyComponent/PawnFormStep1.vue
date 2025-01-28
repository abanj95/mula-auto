<template>
    <v-card class="pa-4">
      <h2 class="step-title">Personal Details</h2>
      <v-text-field label="Name" v-model.trim="localForm.name" outlined></v-text-field>
      <v-text-field label="Cellphone" v-model.trim="localForm.cellphone" outlined></v-text-field>
      <v-text-field label="Email" v-model.trim="localForm.email" outlined></v-text-field>
      <v-text-field label="Town" v-model.trim="localForm.town" outlined></v-text-field>
  
      <h2 class="step-title">Vehicle Details</h2>
      <v-text-field label="Vehicle Brand" v-model.trim="localForm.vehicleBrand" outlined></v-text-field>
      <v-text-field label="Year" v-model.trim="localForm.year" outlined></v-text-field>
      <v-text-field label="Mileage" v-model.trim="localForm.mileage" outlined></v-text-field>
      <v-select
        label="How was your vehicle purchased?"
        :items="['Bank', 'Cash', 'Financed']"
        v-model="localForm.purchaseMethod"
        outlined
      ></v-select>
      <v-text-field label="Current Value of the Car" v-model.trim="localForm.carValue" prefix="R" outlined></v-text-field>
      <v-text-field label="How Much You Want to Borrow" v-model.trim="localForm.loanAmount" prefix="N$" outlined></v-text-field>
    </v-card>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref, watch } from 'vue';
  
  const props = defineProps(["form"]);
  const emit = defineEmits(["update:form"]);
  
  // Track local form state
  const localForm = ref({ ...props.form });
  
  // Sync form updates
  watch(localForm, (newVal) => {
    emit("update:form", newVal);
  }, { deep: true });
  
  </script>
  