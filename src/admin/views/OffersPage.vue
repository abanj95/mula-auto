<template>
    <v-container>
      <h1 class="page-title">Offers Management</h1>
  
      <!-- ✅ Search & Filter Component -->
      <SearchFilterBar
        v-model:search="searchQuery"
        v-model:status="selectedStatus"
      />
  
      <!-- ✅ Offers Table Component -->
      <OffersTable
        :offers="filteredOffers"
        @updateOfferStatus="updateOfferStatus"
      />
    </v-container>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import OffersTable from '@/admin/components/OfferBoard/OffersTable.vue';
  import SearchFilterBar from '@/admin/components/OfferBoard/SearchFilterBar.vue';
  
  // ✅ Offers Data (Ensure it's an array)
  const offers = ref([]);
  
  // ✅ Search & Filter Inputs
  const searchQuery = ref('');
  const selectedStatus = ref('All');
  
  // ✅ Fetch Offers from API with Error Handling
  const fetchOffers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/offers');
      const data = await response.json();
  
      if (Array.isArray(data)) {
        offers.value = data; // ✅ Ensure it's assigned only if it's an array
      } else {
        console.error("Error: Expected an array but got:", data);
        offers.value = []; // ✅ Prevents filter() error
      }
    } catch (error) {
      console.error('Error fetching offers:', error);
      offers.value = []; // ✅ Prevents errors if API fails
    }
  };
  
  // ✅ Computed Property for Filtered Offers (Fixing .toLowerCase() error)
  const filteredOffers = computed(() => {
    if (!Array.isArray(offers.value)) return []; // ✅ Ensure filter() always runs on an array
  
    return offers.value.filter((offer) => {
      const userName = offer.user_name ? offer.user_name.toLowerCase() : ''; // ✅ Fix for null error
      const search = searchQuery.value.toLowerCase();
  
      const matchesSearch = userName.includes(search);
      const matchesStatus =
        selectedStatus.value === 'All' || offer.status === selectedStatus.value;
  
      return matchesSearch && matchesStatus;
    });
  });
  
  // ✅ Update Offer Status (Called When Admin Accepts/Rejects an Offer)
  const updateOfferStatus = async ({ offerId, status }) => {
    try {
      await fetch(`http://localhost:3001/api/offers/${offerId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
  
      // ✅ Update UI After Status Change
      const offer = offers.value.find((o) => o.id === offerId);
      if (offer) offer.status = status;
    } catch (error) {
      console.error('Error updating offer status:', error);
    }
  };
  
  // ✅ Fetch Offers on Page Load
  onMounted(fetchOffers);
  </script>
  
  <style scoped>
  .page-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  </style>
  