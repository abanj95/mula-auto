<template>
  <v-app>
     <Header/>
     <main>
      <router-view />
     </main>
     <Footer />
  </v-app>
</template>

<script setup>
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>

<style>

</style>
