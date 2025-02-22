<template>
  <!-- BreadCrumb -->
  <BreadcrumbInfo pageTitle="Contact Us"/>
    <v-container fluid>
    <v-container>
      <v-row>
        <!-- Left Column -->
        <v-col cols="12" md="6">
          <ContactInfo />
        </v-col>
  
        <!-- Right Column -->
        <v-col cols="12" md="6">
          <ContactForm />
        </v-col>
      </v-row>
    </v-container>
    </v-container>
  </template>
  
  <script setup>
  import BreadcrumbInfo from "@/components/Contact/BreadcrumbInfo.vue";
  import ContactInfo from "@/components/Contact/ContactInfo.vue";
  import ContactForm from "@/components/Contact/ContactForm.vue";
  </script>
  