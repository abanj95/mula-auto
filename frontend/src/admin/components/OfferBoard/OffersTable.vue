<template>
    <v-container>
      <h2 class="section-title">Vehicle Offers</h2>
  
      <!-- ✅ Offers Table -->
      <v-data-table
        :headers="headers"
        :items="computedOffers"
        item-value="id"
        class="elevation-1"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <!-- ✅ Vehicle Title Links to Vehicle Details -->
            <td>
              <router-link :to="`/vehicle/${item.vehicle_id}`" class="vehicle-link">
                {{ item.vehicle_name || 'Unknown Vehicle' }}
              </router-link>
            </td>
            <td>{{ item.user_name }}</td>
            <td>{{ item.user_email }}</td>
            <td>{{ item.user_number }}</td>
            <td>N${{ formatPrice(item.offer_amount) }}</td>
            <td>{{ formatDate(item.date_offered) }}</td>
            <td>{{ item.status }}</td>
            <td>
              <v-btn color="green" variant="flat" size="small" @click="acceptOffer(item)">
                Accept
              </v-btn>
              <v-btn color="red" variant="flat" size="small" class="ml-2" @click="rejectOffer(item)">
                Reject
              </v-btn>
              <v-btn color="orange" variant="flat" size="small" class="ml-2" @click="openCounterOffer(item)">
                Counter
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
  
      <!-- ✅ Counter Offer Modal -->
      <v-dialog v-model="counterOfferModal" max-width="500px">
        <v-card>
          <v-card-title class="d-flex align-center justify-space-between">
            Counter Offer for {{ selectedOffer?.user_name }}
            <v-btn icon @click="counterOfferModal = false" variant="flat">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <p>Enter a counter offer amount:</p>
            <v-text-field v-model="counterAmount" label="Counter Offer Amount (N$)" type="number" required></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" text @click="counterOfferModal = false">Cancel</v-btn>
            <v-btn color="orange" @click="submitCounterOffer" :loading="submitting">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, computed, ref } from 'vue';
  
  // ✅ Define Props
  const props = defineProps({
    offers: {
      type: Array,
      default: () => [],
    },
  });
  
  // ✅ Computed Property for Offers
  const computedOffers = computed(() => props.offers);
  
  // ✅ Define Emits
  const emit = defineEmits(['updateOfferStatus', 'sendCounterOffer']);
  
  // ✅ Table Headers
  const headers = [
    { title: "ID", key: "id" },
    { title: "Vehicle", key: "vehicle_name" },
    { title: "User Name", key: "user_name" },
    { title: "Email", key: "user_email" },
    { title: "Phone", key: "user_number" },
    { title: "Offer Amount", key: "offer_amount" },
    { title: "Date", key: "date_offered" },
    { title: "Status", key: "status" },
    { title: "Actions", key: "actions", sortable: false },
  ];
  
  // ✅ Format Price
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
    }).format(price);
  };
  
  // ✅ Format Date (YYYY-MM-DD)
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Extract YYYY-MM-DD
  };
  
  // ✅ Accept Offer
  const acceptOffer = (offer) => {
    emit('updateOfferStatus', { offerId: offer.id, status: 'Accepted' });
  };
  
  // ✅ Reject Offer
  const rejectOffer = (offer) => {
    emit('updateOfferStatus', { offerId: offer.id, status: 'Rejected' });
  };
  
  // ✅ Counter Offer Logic
  const counterOfferModal = ref(false);
  const counterAmount = ref('');
  const selectedOffer = ref(null);
  const submitting = ref(false);
  
  // ✅ Open Counter Offer Modal
  const openCounterOffer = (offer) => {
    selectedOffer.value = offer;
    counterAmount.value = ''; // Reset input field
    counterOfferModal.value = true;
  };
  
  // ✅ Submit Counter Offer
  const submitCounterOffer = async () => {
    if (!counterAmount.value || counterAmount.value <= 0) {
      alert('Please enter a valid counter offer amount.');
      return;
    }
  
    submitting.value = true;
  
    try {
      await fetch(`http://localhost:3001/api/offers/${selectedOffer.value.id}/counter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          counter_amount: counterAmount.value,
        }),
      });
  
      emit('sendCounterOffer', {
        offerId: selectedOffer.value.id,
        counterAmount: counterAmount.value,
      });
  
      counterOfferModal.value = false;
    } catch (error) {
      console.error('Error submitting counter offer:', error);
    } finally {
      submitting.value = false;
    }
  };
  </script>
  
  <style scoped>
  .section-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
  }
  
  .v-btn {
    text-transform: none;
  }
  
  /* ✅ Style for Vehicle Link */
  .vehicle-link {
    text-decoration: none;
    color: #1976D2;
    font-weight: bold;
  }
  
  .vehicle-link:hover {
    text-decoration: underline;
  }
  </style>
  