<template>
    <v-row>
      <!-- ✅ Search Bar -->
      <v-col cols="12" md="4">
        <v-text-field
          :modelValue="search"
          @update:modelValue="$emit('update:search', $event)"
          label="Search Applicants"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
        />
      </v-col>
  
      <!-- ✅ Status Filter -->
      <v-col cols="12" md="4">
        <v-select
          :modelValue="status"
          @update:modelValue="$emit('update:status', $event)"
          label="Filter by Status"
          :items="['All', 'Pending', 'Accepted', 'Rejected']"
          variant="outlined"
          hide-details
        />
      </v-col>
  
      <!-- ✅ Vuetify Styled Date Range Picker -->
      <v-col cols="12" md="4">
        <v-menu v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y>
          <template v-slot:activator="{ props }">
            <v-text-field
              v-bind="props"
              v-model="formattedDateRange"
              label="Select Date Range"
              prepend-inner-icon="mdi-calendar"
              readonly
              variant="outlined"
              hide-details
            />
          </template>
          <v-date-picker v-model="dateRange" range @update:modelValue="updateDateRange"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref, computed } from 'vue';
  
  const props = defineProps({
    search: String,
    status: String,
    dateFilter: Array,
  });
  
  const emit = defineEmits(['update:search', 'update:status', 'update:dateFilter']);
  
  const menu = ref(false);
  const dateRange = ref(props.dateFilter ?? []);
  

  const formattedDateRange = computed(() => {
    if (dateRange.value.length === 2) {
      return `${dateRange.value[0]} - ${dateRange.value[1]}`;
    }
    return '';
  });
  

  const updateDateRange = (dates) => {
    dateRange.value = dates || [];
    emit('update:dateFilter', dateRange.value);
  };
  </script>
  
  <style scoped>
  
  .v-text-field {
    background: white;
  }
  </style>
  