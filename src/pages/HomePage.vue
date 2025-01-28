<template>
  <v-container fluid class="hero-section pa-0 ma-0">
  <!-- <v-container> -->
    <!-- Carousel -->
    <v-carousel
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
        <!-- Text Animation at the bottom left -->
        <div class="text-animation-content">
          <transition :key="currentSlide + '-title'" name="zoom-title" appear>
            <div class="hero-title">
              {{ slogans[currentSlide].mainText }}
            </div>
          </transition>
          <transition :key="currentSlide + '-subtitle'" name="typing" appear>
            <div class="hero-subtitle typing-effect">
              {{ slogans[currentSlide].subText }}
            </div>
          </transition>
        </div>
      </v-carousel-item>
    </v-carousel>
    </v-container>

    <!-- Calculator on the right -->
    <div class="overlay-content">
      <v-row>
        <v-col cols="6"></v-col>
        <v-col cols="6" class="mt-16">
          <calculator />
        </v-col>
      </v-row>
    </div>

    <!-- Additional Sections -->
    <div>
      <assetsection />
    </div>
    <div>
      <trustsection />
    </div>
  
      <serviceoverview />
 
  <!-- </v-container> -->
</template>

<script setup>
import { ref } from "vue";
import calculator from '../components/Home/CalculatorSection.vue';
import assetsection from '../components/Home/AssetSection.vue';
import trustsection from '../components/Home/TrustSection.vue';
import serviceoverview from '../components/Home/ServiceOverview.vue';

const currentSlide = ref(0);

const pics = ref([
  { src: require("@/assets/hero/PIC_1.jpg") },
  { src: require("@/assets/hero/PIC_2.jpg") },
  { src: require("@/assets/hero/PIC_3.jpg") },
]);

const slogans = ref([
  {
    mainText: "Drive In, Cash Out - Unlock Equity From Your Vehicle!",
    subText: "Instant Capital with Once-Off Interest.",
  },
  {
    mainText: "Park with Peace of Mind for Up to 3 Months",
    subText: "in Our Ultra-Safe & Fully Insured Warehouse.",
  },
  {
    mainText: "Flexible Repayment Made Easy - Your Terms, Your Timeline.",
    subText: "We Work with You for a Stress-Free Solution.",
  },
]);
</script>

<style scoped>
.hero-section {
  padding: 0;
  margin: 0;
  width: 100%;
  position: relative;
}

.carousel {
  width: 100%;
  max-width: 100vw; /* Ensure the carousel spans full width */
  margin: 0;
  padding: 0;
}

/* Text Animation at the bottom left */
.text-animation-content {
  position: absolute;
  bottom: 40px;
  left: 40px;
  z-index: 2;
  width: 50%;
}

/* Hero Title */
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

/* Hero Subtitle */
.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  margin-top: 10px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

/* Zoom effects for title */
.zoom-title-enter-active, .zoom-title-leave-active {
  transition: transform 3s ease;
}
.zoom-title-enter-from, .zoom-title-leave-to {
  transform: scale(0.7);
}
.zoom-title-enter-to, .zoom-title-leave-from {
  transform: scale(1);
}

/* Typing effect for subtitle */
.typing-effect {
  display: inline-block;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 4s steps(50, end) forwards;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* Overlay content for calculator */
.overlay-content {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 80%;
  height: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 40px;
  padding-top: 20px;
}
</style>
