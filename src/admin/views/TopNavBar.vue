<template>
    <v-app-bar color="white" app flat height="64" class="elevation-1">
      <!-- Logo Section -->
      <v-toolbar-title class="d-flex align-center">
        <v-img
          src="@/assets/mula-logo.svg"
          alt="Company Logo"
          max-width="40"
          class="mr-2"
        />
        <span class="font-weight-bold text-uppercase">Admin Dashboard</span>
      </v-toolbar-title>
  
      <v-spacer></v-spacer>
  
      <!-- Notification Section -->
      <v-btn icon>
        <v-badge :content="notifications" color="red" overlap>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
  
      <!-- Admin Profile Section -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on" class="d-flex align-center">
            <v-avatar size="32">
              <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
            <span class="ml-2">Admin</span>
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
  
        <v-list>
          <v-list-item>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title class="red--text">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const notifications = ref(3);
  
  const logout = () => {
    console.log('Logged out');
  };
  </script>
  
  <style scoped>
  .v-app-bar {
    border-bottom: 1px solid #e0e0e0;
  }
  
  .v-toolbar-title {
    font-size: 18px;
  }
  
  .v-breadcrumbs {
    font-size: 14px;
  }
  </style>
  