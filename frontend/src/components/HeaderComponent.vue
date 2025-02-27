<template>
  <v-app-bar class="header-nav" flat height="80" color="white" app>
    <v-container class="header-content d-flex align-center justify-space-between">
      
      <!-- ✅ Logo Section -->
      <v-img src="@/assets/mula-logo.svg" alt="Logo" max-width="150" class="logo" />

      <!-- ✅ Contact Info (Hidden on Small Screens) -->
      <div class="contact-info d-none d-md-flex align-center">
        <v-divider vertical class="mx-3"></v-divider>
        <div class="phone-number">(085) 775 9878</div>
        <v-divider vertical class="mx-3"></v-divider>
        <v-btn icon href="https://api.whatsapp.com/send/?phone=264813000592&text=Hi%2C+Mula+Channels+Trading&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
>
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
        <v-divider vertical class="mx-3"></v-divider>
      </div>

      <!-- ✅ Navigation Links (Hidden on Small Screens) -->
      <div class="nav-links d-none d-md-flex">
        <router-link to="/" class="nav-link" exact>Home</router-link>
        <router-link to="/how-it-works" class="nav-link">How It Works</router-link>
        <router-link to="/services" class="nav-link">Services</router-link>
        <router-link to="/vehicles-for-sale" class="nav-link">For Sale</router-link>
      </div>

      <!-- ✅ Contact Us Button (Visible on Large Screens) -->
      <v-btn color="black" class="white--text d-none d-md-flex" to="/contact" variant="elevated">
        Contact Us
      </v-btn>

      <!-- ✅ Hamburger Menu (Visible on Mobile) -->
      <v-btn icon class="menu-icon d-md-none" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>

    <!-- ✅ Mobile Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" temporary right class="mobile-drawer">
      <v-list dense>
        <v-list-item to="/" @click="drawer = false">Home</v-list-item>
        <v-list-item to="/how-it-works" @click="drawer = false">How It Works</v-list-item>
        <v-list-item to="/services" @click="drawer = false">Services</v-list-item>
        <v-list-item to="/vehicles-for-sale" @click="drawer = false">For Sale</v-list-item>
        <v-list-item to="/contact" @click="drawer = false">Contact Us</v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';
const drawer = ref(false); // ✅ Controls the mobile drawer

// const whatsapp = ref(null);
// const whatsapp =ref("https://api.whatsapp.com/send/?phone=264813000592&text=Hi%2C+Mula+Channels+Trading&type=phone_number&app_absent=0");
</script>

---

<style scoped>
/* ✅ Header Base Styles */
.header-nav {
  background-color: #ffffff;
  width: 100%;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.header-content {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  max-width: 120px;
}

.contact-info {
  font-weight: bold;
  color: #2b2b2b;
  font-size: 16px;
}

.phone-number {
  font-weight: bold;
}

/* ✅ Navigation Links Styling */
.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  position: relative;
  padding: 8px 0;
  font-weight: 500;
  color: #2b2b2b;
  text-decoration: none;
  text-transform: capitalize;
  transition: color 0.3s ease;
}

/* ✅ Hover Effect (Underline Animation) */
.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #121536;
  left: 0;
  bottom: -2px;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #121536;
}

/* ✅ Active Link Style */
.router-link-exact-active {
  font-weight: bold;
  color: #121536 !important;
}

/* ✅ Responsive Design */
@media (max-width: 960px) {
  .menu-icon {
    display: inline-flex;
  }
  .nav-links,
  .contact-info,
  .v-btn.d-none.d-md-flex {
    display: none !important;
  }
  .mobile-drawer {
    width: 200px;
  }
}
</style>
