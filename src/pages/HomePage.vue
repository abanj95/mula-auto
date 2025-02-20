<template>
  <v-container fluid class="hero-section pa-0 ma-0">
    <!-- ✅ Carousel (hidden on mobile) -->
    <!-- ✅ Hero Section -->
<v-carousel
  v-if="!isMobile"
  height="750"
  class="carousel"
  show-arrows="hover"
  cycle
  hide-delimiter-background
  v-model="currentSlide"
>
  <v-carousel-item
    v-for="(pic, i) in pics"
    :key="i"
    :src="pic.src"
    cover
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
  >
    <!-- ✅ Enhanced Text Animations -->
    <div class="text-animation-content">
      <transition name="fade-slide" mode="out-in" appear>
        <h1 v-if="currentSlide === i" class="hero-title">
          {{ slogans[currentSlide].mainText }}
        </h1>
      </transition>

      <transition name="fade-delay" mode="out-in" appear>
        <p v-if="currentSlide === i" class="hero-subtitle">
          {{ slogans[currentSlide].subText }}
        </p>
      </transition>
    </div>
  </v-carousel-item>
</v-carousel>


    <!-- ✅ Calculator Overlay (always visible) -->
    <div class="overlay-calculator">
      <Calculator />
    </div>
  </v-container>

  <!-- Additional Sections -->
  <AssetSection />
  <TrustSection />
  <ServiceOverview />
</template>

<script setup>
import { ref, onMounted } from "vue";
import Calculator from '../components/Home/CalculatorSection.vue';
import AssetSection from '../components/Home/AssetSection.vue';
import TrustSection from '../components/Home/TrustSection.vue';
import ServiceOverview from '../components/Home/ServiceOverview.vue';

// Reactive slide tracking
const currentSlide = ref(0);
const pics = ref([
  { src: require("@/assets/hero/PIC_1.jpg") },
  { src: require("@/assets/hero/PIC_2.jpg") },
  { src: require("@/assets/hero/PIC_3.jpg") },
]);

const slogans = ref([
  { mainText: "Drive In, Cash Out!", subText: "Instant Capital with Once-Off Interest." },
  { mainText: "Park Up to 3 Months", subText: "In Our Ultra-Safe & Fully Insured Warehouse." },
  { mainText: "Flexible Repayment Made Easy", subText: "We Work with You for a Stress-Free Solution." }
]);

// ✅ Detect Mobile Devices
const isMobile = ref(false);
onMounted(() => {
  isMobile.value = window.innerWidth <= 768; // Adjust breakpoint if needed
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 768;
  });
});
</script>

<style scoped>

.text-animation-content {
  position: absolute;
  bottom: 50px;
  left: 60px;
  z-index: 3;
  color: white;
  max-width: 60%;
}

/* ✅ Hero Title */
.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
}

/* ✅ Hero Subtitle */
.hero-subtitle {
  font-size: 1.5rem;
  margin-top: 10px;
  opacity: 0.9;
  line-height: 1.6;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
}

/* ✅ Animation Effects */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.8s ease-in-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* ✅ Delayed Fade-in for Subtitles */
.fade-delay-enter-active {
  transition: opacity 1.2s ease 0.5s; /* Adds a delay */
}

.fade-delay-enter-from {
  opacity: 0;
}

.fade-delay-enter-to {
  opacity: 1;
}

/* ✅ Hero Section Styles */
.hero-section {
  position: relative;
  width: 100%;
  height: 750px;
  overflow: hidden;
}

.carousel {
  width: 100%;
  height: 100%;
}

/* ✅ Calculator Overlay */
.overlay-calculator {
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  z-index: 5;
  max-width: 600px;
  width: 100%;
}


/* ✅ Mobile Styles */
@media (max-width: 768px) {
  .carousel {
    display: none; /* Hide carousel on mobile */
  }

  .overlay-calculator {
    position: static;
    transform: none;
    margin: 20px auto;
    max-width: 90%;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .text-animation-content {
    left: 20px;
    bottom: 30px;
    max-width: 90%;
  }
}
</style>
