<template>
  <v-container class="my-12">
    <!-- ✅ Why Choose Us Header -->
    <h2 class="why-choose-us">Why Choose Us</h2>

    <v-row justify="center" align="center">
      <v-col cols="12" md="4">
        <v-card class="pa-8 text-center" elevation="3">
          <v-icon large color="primary">mdi-car</v-icon>
          <v-card-title class="mt-4">Value Assessment</v-card-title>
          <v-card-text>
            We offer accurate assessments to determine your car's value, ensuring you get the best deal for your loan.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-8 text-center" elevation="3">
          <v-icon large color="primary">mdi-lock</v-icon>
          <v-card-title class="mt-4">Security</v-card-title>
          <v-card-text>
            Your car is stored in our secure facilities with 24/7 monitoring and insurance, keeping it safe throughout the loan term.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-8 text-center" elevation="3">
          <v-icon large color="primary">mdi-cash</v-icon>
          <v-card-title class="mt-4">Quick Cash Release</v-card-title>
          <v-card-text>
            Get instant access to cash as soon as your vehicle is assessed, no delays or lengthy paperwork.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// No script needed for this layout
</script>

<style scoped>
/* ✅ Why Choose Us Heading Styling */
.why-choose-us {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #121536;
  margin-bottom: 2rem;
}

.v-card {
  border-radius: 20px;
}

.v-icon {
  font-size: 40px;
}

.v-card-title {
  font-weight: bold;
}

.v-card-text {
  color: #555;
  font-size: 1rem;
}
</style>
