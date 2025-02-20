<template>
  <v-app>
    <!-- 🔳 Top Navigation Bar -->
    <v-app-bar app color="white" elevation="1">
      <v-container class="d-flex align-center justify-space-between">
        <!-- Logo & Title -->
        <div class="d-flex align-center">
          <v-img src="@/assets/mula-logo.svg" alt="Logo" max-width="50" class="mr-3" />
          <h2 class="title">Admin Dashboard <span class="uat">MULA</span></h2>
        </div>

        <!-- Search, Notifications, Admin Section -->
        <div class="d-flex align-center">

          <v-btn icon>
            <v-badge content="2" color="red" overlap>
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>

          <v-menu offset-y>
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props">
                <v-icon>mdi-account-circle</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>Profile</v-list-item>
              <v-list-item>Settings</v-list-item>
              <v-list-item>Logout</v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-container>
    </v-app-bar>

    <!-- 🔳 Subheader -->
    <v-app-bar color="primary" dense app dark>
      <v-container class="d-flex align-center">
        <v-btn icon @click="drawer = !drawer" class="hamburger">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <h3 class="subheader-title">Admin Area</h3>
      </v-container>
    </v-app-bar>

    <!-- 🔳 Sidebar (Drawer) -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <MenuDrawer />
    </v-navigation-drawer>

    <!-- 🔳 Main Content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import MenuDrawer from '../components/MenuDrawer.vue';

const drawer = ref(true);
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 20px;
  color: black;
}

.uat {
  color: rgb(0, 208, 255);
  font-weight: bold;
}

.subheader-title {
  color: white;
  font-weight: bold;
  margin-left: 10px;
}

.search-bar {
  max-width: 200px;
  margin-right: 10px;
}

.v-application .v-app-bar {
  z-index: 1000 !important; /* Ensure navbars stay on top */
}

.hamburger {
  color: white;
}
</style>
