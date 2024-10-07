<template>
  <v-container class="assets-section" fluid>
    <v-row class="text-center">
      <v-col cols="12">
        <h2 class="section-title">Assets We Accept</h2>
        <p class="section-subtitle">
          Mula Trading Channels uses primarily the following movable assets as
          surety for your loan. The more valuable the asset, the higher loan you
          can obtain.
        </p>
        <v-divider><v-icon icon="mdi-shield-car" size="x-large"></v-icon></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style scoped>
.assets-section {
  padding: 50px 0;
  background-color: lightgrey;
  /* border-radius: 20px; */
}

.section-title {
  /* color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px; */

  font-size: 3rem;
  font-weight: 700;
  color: #121536;
  /* text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); */
}

.section-subtitle {
  color: grey;
  font-size: 16px;
  margin-bottom: 40px;
}

</style>
