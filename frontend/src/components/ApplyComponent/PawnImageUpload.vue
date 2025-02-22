<template>
    <div class="image-upload">
      <img :src="(`@/assets/icons/${icon}`)" alt="Upload icon" class="upload-icon" />
      <v-file-input :label="label" :model-value="modelValue" @update:model-value="updateValue" outlined></v-file-input>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  defineProps(["label", "icon", "modelValue"]);
  const emit = defineEmits(["update:modelValue"]);
  
  const updateValue = (newValue) => {
    emit("update:modelValue", newValue);
  };
  </script>
  
  <style scoped>
  .image-upload {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .upload-icon {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  </style>
  