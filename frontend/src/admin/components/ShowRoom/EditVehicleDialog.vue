<template>
    <v-dialog v-model="localDialog" max-width="600px">
      <v-card>
        <v-card-title>Edit Vehicle</v-card-title>
        <v-divider></v-divider>
  
        <VehicleForm v-model:form="editedVehicle" />
  
        <v-card-actions>
          <v-btn color="primary" @click="updateVehicle">Save Changes</v-btn>
          <v-btn text @click="closeDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  import { ref, watch, defineProps, defineEmits } from 'vue';
  import VehicleForm from './VehicleForm.vue';
  
  // ✅ Props and Emits
  const props = defineProps(['vehicle', 'modelValue']);
  const emit = defineEmits(['update:modelValue', 'updated']);
  
  // ✅ Local copy to avoid direct prop mutation
  const editedVehicle = ref({ ...props.vehicle });
  const localDialog = ref(props.modelValue);
  
  // ✅ Watch for prop changes
  watch(
    () => props.vehicle,
    (newVal) => {
      editedVehicle.value = { ...newVal };
    }
  );
  
  // ✅ Watch for dialog visibility changes
  watch(
    () => props.modelValue,
    (newVal) => {
      localDialog.value = newVal;
    }
  );
  
  // ✅ Update Vehicle API Call
  const updateVehicle = async () => {
    try {
      await fetch(`http://localhost:3001/showroom/${editedVehicle.value.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedVehicle.value),
      });
      emit('updated'); // Refresh the vehicle list
      closeDialog();
    } catch (error) {
      console.error('Error updating vehicle:', error);
    }
  };
  
  // ✅ Close the dialog properly
  const closeDialog = () => {
    emit('update:modelValue', false);
  };
  </script>
  