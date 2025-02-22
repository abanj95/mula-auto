<template>
  <BreadcrumbInfo page-title="Vehicle Details" />

  <v-container>
    <v-row>
      <!-- ✅ Vehicle Image Gallery -->
      <v-col cols="12" md="6">
        <VehicleGallery :images="vehicle.images" />
      </v-col>

      <!-- ✅ Vehicle Details Section -->
      <v-col cols="12" md="6">
        <h1>{{ vehicle.title }}</h1>
        <p>{{ vehicle.description }}</p>
        <p><strong>Price:</strong> N$ {{ vehicle.price }}</p>
        <p><strong>Transmission:</strong> {{ vehicle.transmission }}</p>
        <p><strong>Year:</strong> {{ vehicle.year }}</p>
        <p><strong>Mileage:</strong> {{ vehicle.mileage }} km</p>

        <!-- ✅ Make an Offer Button -->
        <v-btn color="green" class="mt-3" @click="openOfferModal">
          Make an Offer
        </v-btn>

        <!-- ✅ Dummy Contact Info -->
        <v-divider class="my-4"></v-divider>
        <h3>Contact Seller</h3>
        <p><strong>Phone:</strong> +264 81 123 4567</p>
        <p><strong>Email:</strong> seller@example.com</p>
      </v-col>
    </v-row>

    <!-- ✅ Related Vehicles -->
    <v-row class="mt-5">
      <v-col>
        <RelatedVehicles :relatedVehicles="relatedVehicles" />
      </v-col>
    </v-row>

    <!-- ✅ Success Alert (Shows for 3 seconds) -->
    <v-alert
      v-if="offerSuccess"
      type="success"
      class="mt-3"
      closable
    >
      Offer submitted successfully! We will contact you soon.
    </v-alert>

    <!-- ✅ Make an Offer Modal -->
    <v-dialog v-model="offerModal" max-width="500px">
      <v-card>
        <v-card-title class="d-flex align-center justify-space-between">
          Make an Offer
          <v-btn icon @click="offerModal = false" variant="flat">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="offerData.user_name"
            label="Full Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="offerData.user_email"
            label="Email Address"
            type="email"
            required
          ></v-text-field>
          <v-text-field
            v-model="offerData.user_number"
            label="Phone Number"
            type="tel"
            :rules="[phoneRules]"
            required
          ></v-text-field>

          <v-text-field
            v-model="offerData.offer_amount"
            label="Offer Amount (N$)"
            type="number"
            required
          ></v-text-field>
        </v-card-text>

        <!-- ✅ Error Alert (If Submission Fails) -->
        <v-alert v-if="offerError" type="error" class="mt-3" closable>
          Failed to submit offer. Please try again later.
        </v-alert>

        <v-card-actions>
          <v-btn color="red" text @click="offerModal = false">Cancel</v-btn>
          <v-btn color="green" @click="submitOffer" :loading="submitting">
            Submit Offer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import VehicleGallery from "@/components/VehiclesForSale/VehicleGallery.vue";
import BreadcrumbInfo from "@/components/Contact/BreadcrumbInfo.vue";
// import RelatedVehicles from "@/components/VehiclesForSale/RelatedVehicles.vue";

const route = useRoute();
const vehicle = ref({});
const offerModal = ref(false);
const submitting = ref(false);
const offerSuccess = ref(false);
const offerError = ref(false);

const phoneRules = (value) => {
  return /^[0-9]{7,15}$/.test(value) || "Enter a valid phone number";
};

// ✅ Offer Data
const offerData = ref({
  user_name: "",
  user_email: "",
  user_number: "",
  offer_amount: "",
});

// ✅ Open Modal
const openOfferModal = () => {
  offerSuccess.value = false; // Reset success message
  offerError.value = false; // Reset error message
  offerModal.value = true;
};

// ✅ Fetch Vehicle Data
onMounted(async () => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/showroom/${route.params.id}`
    );
    vehicle.value = await response.json();
  } catch (error) {
    console.error("Error fetching vehicle details:", error);
  }
});

// ✅ Submit Offer
const submitOffer = async () => {
  submitting.value = true; // Start loading

  try {
    const response = await fetch("http://localhost:3001/api/offers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vehicle_id: route.params.id, // ✅ Send vehicle ID properly
        user_name: offerData.value.user_name,
        user_email: offerData.value.user_email,
        user_number: offerData.value.user_number,
        offer_amount: offerData.value.offer_amount,
      }),
    });

    const data = await response.json();
    console.log(data); // Debugging purpose

    if (response.ok) {
      offerSuccess.value = true; // ✅ Show success message
      offerModal.value = false; // ✅ Close modal
      resetOfferForm(); // ✅ Clear form after submission

      // ✅ Hide success message after 3 seconds
      setTimeout(() => {
        offerSuccess.value = false;
      }, 3000);
    } else {
      offerError.value = true; // ✅ Show error message
    }
  } catch (error) {
    console.error("Error submitting offer:", error);
    offerError.value = true; // ✅ Show error message
  } finally {
    submitting.value = false; // Stop loading
  }
};

// ✅ Reset the form after successful submission
const resetOfferForm = () => {
  offerData.value = {
    user_name: "",
    user_email: "",
    user_number: "",
    offer_amount: "",
  };
};
</script>

<style scoped>
/* ✅ Styling adjustments */
.v-btn {
  text-transform: none;
}
</style>
