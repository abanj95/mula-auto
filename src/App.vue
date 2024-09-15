<template>
  <v-app>
     <Header/>
     <main>
      <router-view />
     </main>
  </v-app>
</template>

<script setup>
import Header from './components/HeaderComponent.vue'
</script>

<style>
/* Your styles here */
</style>
