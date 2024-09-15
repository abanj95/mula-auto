// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue'; 
import AboutUs from '../pages/AboutPage.vue';
import ContactUs from '../pages/ContactPage.vue';
import VehiclesForSale from '../pages/VehiclesForSale.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage  // Map the '/' path to HomePage.vue
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactUs
  },
  {
    path: '/vehicles-for-sale',
    name: 'vehicles',
    component: VehiclesForSale
  }
    
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
