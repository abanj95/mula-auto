<template>
    <v-container fluid class="breadcrumb-container">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <div class="breadcrumb">
            <span class="breadcrumb-link" @click="navigateToHome">Home</span> &nbsp; > &nbsp;
            <span class="breadcrumb-current">{{ pageTitle }}</span>
          </div>
          <h1 class="page-title">{{ pageTitle }}</h1>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';
  /* eslint-disable vue/multi-word-component-names */
  const router = useRouter();
  defineProps({
    pageTitle: {
      type: String,
      required: true
    }
  });
  
  const navigateToHome = () => {
    router.push('/');
  };
  </script>
  
  <style scoped>
  .breadcrumb-container {
    background-color: #111432;
    padding: 40px 0;
    margin: 0;
    width: 100%;
    max-width: 100%;
    margin-top: 66px;
  }
  
  .breadcrumb {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }
  
  .breadcrumb-link {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .breadcrumb-link:hover {
    color: #ffffff;
  }
  
  .breadcrumb-current {
    color: rgba(255, 255, 255, 0.9);
    font-weight: bold;
  }
  
  .page-title {
    font-size: 32px;
    font-weight: 700;
    color: #ffffff;
    margin-top: 10px;
  }
  </style>
  