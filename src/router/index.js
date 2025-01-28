// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Front end pages
import HomePage from '../pages/HomePage.vue'; 
import AboutUs from '../pages/AboutPage.vue';
import ContactUs from '../pages/ContactPage.vue';
import VehiclesForSale from '../pages/VehiclesForSale.vue';
import HowItWorks from '../pages/HowItWorks.vue';
import PawnPage from '@/pages/PawnPage.vue';
import FaqPage from '@/pages/FaqPage.vue';

// Backend pages
import AdminLayout from '@/admin/views/AdminLayout.vue';
import DashBoard from '@/admin/views/DashBoard.vue';

const routes = [

  // frontEnd routing
  {
    path: '/',
    name: 'Home',
    component: HomePage 
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
  },
  {
    path:'/how-it-works',
    name:'How it works',
    component: HowItWorks
  },
  {
    path:'/pawn',
    name:'pawn vehicle',
    component:PawnPage
  },
  {
    path:'/faq',
    name: 'faq',
    component: FaqPage
  },

  // backEnd rounting

  {
    path:'/admin',
    component:AdminLayout,
    children: [
      {
        path:'dashboard',
        name:'adminDashboard',
        component: DashBoard
      }
    ]

  }
    
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
