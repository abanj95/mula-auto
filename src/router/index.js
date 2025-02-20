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
import VehicleDetails from '@/pages/VehicleDetails.vue';
import ComplaintPage from '@/pages/ComplaintPage.vue';
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue';
import TermsPage from '@/pages/TermsPage.vue';
import LoginPage from '@/pages/LoginPage.vue';

// Backend pages
import AdminLayout from '@/admin/views/AdminLayout.vue';
import DashBoard from '@/admin/views/DashBoard.vue';
import LoanDetails from '@/admin/views/LoanDetails.vue';
import ShowRoom from '@/admin/views/ShowRoom.vue';
import EditVehicle from '@/admin/views/EditVehicle.vue';
import OffersPage from '@/admin/views/OffersPage.vue';

const routes = [

  // frontEnd routing
  {
    path: '/',
    name: 'Home',
    component: HomePage 
  },
  {
    path:'/login',
    name:'login',
    component: LoginPage,
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
  {
    path:'/vehicle-details',
    name: 'Vehicle',
    component: VehicleDetails
  },
  {
    path: '/vehicle/:id', // Ensure this path matches the expected URL
    name: 'VehicleDetails',
    component: VehicleDetails,
    props: true, // To pass the `id` as a prop to VehicleDetails.vue
  },
  {
    path:'/complaints',
    name:'complaints',
    component:ComplaintPage,
  },
  {
    path:'/privacy-policy',
    name:'privacy',
    component:PrivacyPolicy,
  },
  {
    path:'/terms',
    name:'terms',
    component:TermsPage,
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
      },
      {
      path: 'loan/:id',  // Route for viewing loan details
      name: 'loanDetails',
      component: LoanDetails,
      props: true 
      },
      {
        path:'showroom',
        name:'Showroom',
        component: ShowRoom
      },
      {
        path:'showroom/edit/:id', 
        name:'EditVehicle', 
        component: EditVehicle,
        props: true,
      },
      {
        path:'offers', 
        name:'offers', 
        component: OffersPage,
        props: true,
      },
    ]

  },
    
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
