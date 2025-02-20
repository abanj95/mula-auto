<template>
    <v-card class="pa-4">
      <h2 class="step-title">Upload Pictures</h2>
  <!-- <VehicleBlueprint /> -->
      <PawnImageUpload label="Front Side" icon="front.svg" v-model="localForm.vehicleImages.front" />
      <PawnImageUpload label="Back Side" icon="back.svg" v-model="localForm.vehicleImages.back" />
      <PawnImageUpload label="Left Side" icon="left.svg" v-model="localForm.vehicleImages.left" />
      <PawnImageUpload label="Right Side" icon="right.svg" v-model="localForm.vehicleImages.right" />
      <PawnImageUpload label="Engine" icon="engine.svg" v-model="localForm.vehicleImages.engine" />
      <PawnImageUpload label="Interior" icon="interior.svg" v-model="localForm.vehicleImages.interior" />
    </v-card>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref, watch } from 'vue';
  import PawnImageUpload from "./PawnImageUpload.vue";
  // import VehicleBlueprint from './VehicleBlueprint.vue';
  
  const props = defineProps(["form"]);
  const emit = defineEmits(["update:form"]);
  
  const localForm = ref({ ...props.form });
  
  watch(localForm, (newVal) => {
    emit("update:form", newVal);
  }, { deep: true });
  
  </script>
  