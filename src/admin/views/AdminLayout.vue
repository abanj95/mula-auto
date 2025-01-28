<template>
    <div class="admin-layout">
      <v-navigation-drawer>
        <!-- Your drawer content -->
         <!-- <MenuDrawer /> -->
      </v-navigation-drawer>
      <v-app-bar app color="blue" dark>
        <!-- Your app bar content -->
      </v-app-bar>
  
      <v-main class="admin-content">
        <router-view />
      </v-main>
    </div>
  </template>
  
  <script setup>
  // No specific script setup is needed for now
  // import MenuDrawer from '../components/MenuDrawer.vue;'
  </script>
  
  <style scoped>
  .admin-layout {
    height: 100vh;
    display: flex;
  }
  
  .admin-content {
    flex-grow: 1;
    padding: 0; /* Remove any padding */
    margin: 0; /* Remove any margin */
    height: 100vh;
  }
  </style>
  