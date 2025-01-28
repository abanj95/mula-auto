<template>
  <v-app>
    <Header v-if="!isAdminRoute" />
    <!-- Main content wrapper -->
    <v-main class="main-content">
      <v-container 
        fluid 
        :class="{
          'page-container': $route.path !== '/', // Only add margin-top if not on the homepage
        }"
      >
        <router-view />
      </v-container>
    </v-main>
    <Footer v-if="!isAdminRoute" />
  </v-app>
</template>

<script setup>
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import Header from './components/HeaderComponent.vue';
import Footer from './components/FooterComponent.vue';

// Get the current route
const route = useRoute();

// Determine if the current route is part of the admin section
const isAdminRoute = computed(() => route.path.startsWith('/admin'));
</script>

<style scoped>
.main-content {
  padding: 0;
  margin: 0;
  width: 100%;
}

.page-container {
  /* Space between header and content for non-home pages */
  /* margin-top: 80px;  */
  padding: 0;
}
</style>
