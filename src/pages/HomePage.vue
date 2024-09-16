<template>
    <v-container fluid class="hero-section">
      <!-- Carousel -->
      <v-carousel
        height="600"
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
  
      <!-- Calculator on the right -->
      <div class="overlay-content">
        <v-row>
          <v-col cols="6">
            <!-- Text Animation is already inside the carousel -->
          </v-col>
          <v-col cols="6" class="mt-16">
            <calculator />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import calculator from '../components/CalculatorSection.vue'
  
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
    background-color: #8fdefa; /* Light greenish background */
    padding: 50px 0;
    padding-top: 120px;
    position: relative;
    padding-bottom: 0px;
  }
  
  .header {
    border-radius: 20px;
  }
  
  /* Text Animation at the bottom left */
  .text-animation-content {
    position: absolute;
    bottom: 40px; /* Aligns the text at the bottom */
    left: 40px;   /* Keeps content close to the bottom-left */
    z-index: 2;   /* Ensure it's on top of the carousel */
    width: 50%;   /* Adjust width as necessary */
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
  
  /* Typing keyframe */
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
    z-index: 2; /* Make sure it's on top of the carousel */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 40px;
  }
  </style>
  