<template>
    <BreadcrumbInfo page-title="Showroom"/>
    <v-container>
      <VehicleFilter v-model:search="searchQuery" v-model:brand="selectedBrand" />
  
      <v-row>
        <v-col v-for="vehicle in filteredVehicles" :key="vehicle.id" cols="12" sm="6" md="4">
          <VehicleCard :vehicle="vehicle" @view-details="viewVehicleDetails" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import VehicleCard from '@/components/VehiclesForSale/VehicleCard.vue';
  import VehicleFilter from '@/components/VehiclesForSale/VehicleFilter.vue';
  import BreadcrumbInfo from '@/components/Contact/BreadcrumbInfo.vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const searchQuery = ref('');
  const selectedBrand = ref('');
  const vehicles = ref([]);
  
  const fetchVehicles = async () => {
    const response = await fetch('http://localhost:3001/api/showroom');
    vehicles.value = await response.json();
  };
  
  const filteredVehicles = computed(() => {
    return vehicles.value.filter(vehicle => {
      const matchesSearch = vehicle.title.toLowerCase().includes(searchQuery.value.toLowerCase());
      const matchesBrand = selectedBrand.value ? vehicle.brand === selectedBrand.value : true;
      return matchesSearch && matchesBrand;
    });
  });
  
  const viewVehicleDetails = (vehicle) => {
    router.push({ name: 'VehicleDetails', params: { id: vehicle.id } });
  };
  
  onMounted(fetchVehicles);
  </script>
  