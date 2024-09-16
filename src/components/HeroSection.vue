<template>
  <v-container class="align-left">
    <!-- Ensure reactivity for transitions by resetting key -->
    <div v-if="slogans[currentSlide]">
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

  </v-container>
</template>

<script setup>
import { ref, watch, toRefs } from 'vue';

const props = defineProps({
  currentSlide: Number
});

// Slogans for animation
const slogans = ref([
  { mainText: 'Drive In, Cash Out - Unlock Equity From Your Vehicle!', subText: 'Instant Capital with Once-Off Interest.' },
  { mainText: 'Park with Peace of Mind for Up to 3 Months', subText: 'in Our Ultra-Safe & Fully Insured Warehouse.' },
  { mainText: 'Flexible Repayment Made Easy - Your Terms, Your Timeline.', subText: 'We Work with You for a Stress-Free Solution.' }
]);

// Watch the current slide prop to reactively change the text
watch(() => props.currentSlide, (newVal) => {
  console.log('TextAnimation: Current slide changed to:', newVal);
});
</script>

<style scoped>
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 1.5s ease;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  margin-top: 10px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

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

/* Zoom title transition */
.zoom-title-enter-active, .zoom-title-leave-active {
  transition: transform 3s ease;
}

.zoom-title-enter-from, .zoom-title-leave-to {
  transform: scale(0.7);
}

.zoom-title-enter-to, .zoom-title-leave-from {
  transform: scale(1);
}
</style>
