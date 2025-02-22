<template>
    <v-container>
      <v-card class="pa-5">
        <v-card-title class="d-flex justify-space-between align-center">
          Manage Showroom Listings
          <v-btn color="primary" @click="openPostDialog">Post New Vehicle for Sale</v-btn>
        </v-card-title>
  
        <v-divider class="my-3"></v-divider>
  
        <!-- 🔍 Search & Filter Section -->
        <v-row class="mb-4">
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="searchQuery"
              label="Search by Title"
              prepend-inner-icon="mdi-magnify"
              clearable
            ></v-text-field>
          </v-col>
  
          <v-col cols="12" sm="6">
            <v-select
              v-model="statusFilter"
              :items="['All', 'Available', 'Sold']"
              label="Filter by Status"
              clearable
            ></v-select>
          </v-col>
        </v-row>
  
        <!-- ✅ Data Table -->
        <v-data-table
          :headers="headers"
          :items="filteredVehicles"
          item-key="id"
          class="elevation-1"
          :items-per-page="10"
        >
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date Posted</th>
              <th>Actions</th>
            </tr>
          </thead>
  
          <tbody>
            <tr v-for="vehicle in filteredVehicles" :key="vehicle.id">
              <td>{{ vehicle.title }}</td>
              <td>{{ vehicle.price }}</td>
              <td>{{ vehicle.status }}</td>
              <td>{{ formatDate(vehicle.date_posted) }}</td>
              <td>
                <v-btn icon @click="viewVehicleDetails(vehicle.id)">
                  <v-icon color="primary">mdi-eye</v-icon>
                </v-btn>
                <v-btn icon @click="navigateToEdit(vehicle.id)">
                  <v-icon color="orange">mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="deleteVehicle(vehicle.id)">
                  <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-data-table>
  
        <VehicleForm v-if="postDialog" v-model="postDialog" @posted="fetchVehicles" />
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import VehicleForm from '../components/ShowRoom/VehicleForm.vue';
  
  const vehicles = ref([]);
  const postDialog = ref(false);
  const router = useRouter();
  
  const searchQuery = ref('');              // 🔍 Search Query
  const statusFilter = ref('All');          // 📊 Status Filter
  
  // ✅ Fetch vehicles from API
  const fetchVehicles = async () => {
    const response = await fetch('http://localhost:3001/api/showroom');
    vehicles.value = await response.json();
  };
  
  // ✅ Filtered Vehicles
  const filteredVehicles = computed(() => {
  return vehicles.value.filter((vehicle) => {
    const title = vehicle.title ? vehicle.title.toLowerCase() : ''; // ✅ Null-safe check
    const matchesSearch = title.includes(searchQuery.value.toLowerCase());
    const matchesStatus = statusFilter.value === 'All' || vehicle.status === statusFilter.value;
    return matchesSearch && matchesStatus;
  });
});

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  
  const openPostDialog = () => {
    postDialog.value = true;
  };
  
  const navigateToEdit = (id) => {
    router.push({ name: 'EditVehicle', params: { id } });
  };
  
  const viewVehicleDetails = (id) => {
    router.push({ name: 'VehicleDetails', params: { id } });
  };
  
  const deleteVehicle = async (id) => {
    await fetch(`http://localhost:3001/api/showroom/${id}`, { method: 'DELETE' });
    fetchVehicles();
  };
  
  onMounted(fetchVehicles);
  </script>
  
  <style scoped>
  th {
    background-color: #f5f5f5;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
  }
  
  td {
    padding: 10px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }
  
  .v-btn {
    margin: 0 5px;
  }
  </style>
  