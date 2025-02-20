<template>
    <v-footer padless full-width class="footer">
      <v-container class="footer-content" fluid>
        <v-row>
  
          <!-- Company Links -->
          <v-col cols="12" md="3">
            <h4 class="footer-title">Company</h4>
            <ul class="footer-links">
              <li><a href="/about"><v-icon size="12px" color="white">mdi-greater-than</v-icon> About Us</a></li>
              <li><a href="/privacy-policy"><v-icon size="12px" color="white">mdi-greater-than</v-icon> Privacy Policy</a></li>
            </ul>
          </v-col>
  
          <!-- Services Links -->
          <v-col cols="12" md="3">
            <h4 class="footer-title">Services</h4>
            <ul class="footer-links">
              <li><a href="/pawn"><v-icon size="12px" color="white">mdi-greater-than</v-icon> Auto Pawn</a></li>
              <li><a href="/vehicles-for-sale"><v-icon size="12px" color="white">mdi-greater-than</v-icon> Buy Vehicle</a></li>
              <li><a href="/evaluation"><v-icon size="12px" color="white">mdi-greater-than</v-icon> Vehicle Evaluation</a></li>
            </ul>
          </v-col>
  
          <!-- Support Links -->
          <v-col cols="12" md="3">
            <h4 class="footer-title">Support</h4>
            <ul class="footer-links">
              <li><a href="/faq"><v-icon size="12px" color="white">mdi-greater-than</v-icon> FAQ</a></li>
              <li><a href="/terms"><v-icon size="12px" color="white">mdi-greater-than</v-icon> Terms of Service</a></li>
              <li><a href="/complaints"><v-icon size="12px" color="white">mdi-greater-than</v-icon> Complaints</a></li>
              <li><a href="/contact"><v-icon size="12px" color="white">mdi-greater-than</v-icon> Contact Us</a></li>
              <li><a href="/login"><v-icon size="12px" color="white">mdi-greater-than</v-icon> Login</a></li>
            </ul>
          </v-col>
  
          <!-- Social Media Links -->
          <v-col cols="12" md="3">
            <h4 class="footer-title">Follow Us</h4>
            <div class="footer-social-icons">
              <v-btn icon color="white" href="https://facebook.com" target="_blank">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon color="white" href="https://instagram.com" target="_blank">
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon color="white" href="https://youtube.com" target="_blank">
                <v-icon>mdi-youtube</v-icon>
              </v-btn>
              <v-btn icon color="white" href="https://whatsapp.com" target="_blank">
                <v-icon>mdi-whatsapp</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
  
        <!-- Bottom Copyright Section -->
        <v-row>
          <v-col cols="12" class="text-center mt-5">
            <p class="copyright-text">&copy; {{ today.getFullYear() }} <strong>Mula Trading Channels</strong>. All Rights Reserved.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <script setup>
var today = new Date();
  </script>
  
  <style scoped>
  .footer-content {
    background-color: #333;
    padding: 40px;
    color: white;
  }
  
  .footer-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .footer-links {
    list-style-type: none;
    padding-left: 0;
  }
  
  .footer-links li {
    margin-bottom: 8px;
  }
  
  .footer-links li a {
    color: white;
    text-decoration: none;
  }
  
  .footer-links li a:hover {
    text-decoration: underline;
  }
  
  .footer-social-icons .v-btn {
    margin-right: 15px;
  }
  
  .copyright-text {
    font-size: 0.9rem;
    color: #888;
    margin-top: 20px;
  }
  .footer {
  width: 100%;
  padding: 0;
  margin: 0; /* Remove any extra margin */
}
  </style>
  