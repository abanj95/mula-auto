<template>
  <v-container>
    <v-row justify="center">
      <!-- ✅ Main Display Image -->
      <v-col cols="12" md="8">
        <v-card class="main-image-card" @click="openImageModal(0)">
          <v-img :src="getImageUrl(props.images[0])" height="400px" cover />
        </v-card>
      </v-col>
    </v-row>

    <!-- ✅ Thumbnail Grid -->
    <v-row justify="center" class="thumbnail-row">
      <v-col
        v-for="(image, index) in props.images.slice(1)" 
        :key="index"
        cols="4" sm="2"
      >
        <v-card class="thumbnail-card" @click="openImageModal(index + 1)">
          <v-img :src="getImageUrl(image)" height="80px" cover />
        </v-card>
      </v-col>
    </v-row>

    <!-- ✅ Image Modal -->
    <v-dialog v-model="imageModal" max-width="800px">
      <v-card class="modal-container">
        <v-card-text class="image-wrapper">
          <v-btn 
            icon 
            @click="prevImage" 
            v-if="currentImageIndex > 0" 
            class="nav-button left"
          >
            <v-icon size="40">mdi-chevron-left</v-icon>
          </v-btn>

          <!-- ✅ Modal Image Display -->
          <v-img v-if="modalImageSrc" :src="modalImageSrc" class="modal-image" />
          <p v-else class="text-center red--text">Image not found</p>

          <v-btn 
            icon 
            @click="nextImage" 
            v-if="currentImageIndex < props.images.length - 1" 
            class="nav-button right"
          >
            <v-icon size="40">mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-actions class="d-flex justify-center">
          <v-btn color="red" @click="imageModal = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
});

// ✅ Construct Full Image URL
const getImageUrl = (imagePath) => {
  return imagePath ? `http://localhost:3001/showroom_uploads/${imagePath}` : '';
};

// ✅ Modal Logic
const imageModal = ref(false);
const currentImageIndex = ref(0);

// ✅ Compute the Current Image URL for the Modal
const modalImageSrc = computed(() => {
  if (props.images.length > 0) {
    return getImageUrl(props.images[currentImageIndex.value]);
  }
  return null;
});

// ✅ Open Modal and Set Image Index
const openImageModal = (index) => {
  currentImageIndex.value = index;
  imageModal.value = true;
};

// ✅ Next & Previous Image Navigation
const nextImage = () => {
  if (currentImageIndex.value < props.images.length - 1) {
    currentImageIndex.value++;
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};
</script>

<style scoped>
/* ✅ Main Image Styling */
.main-image-card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.main-image-card:hover {
  transform: scale(1.02);
}

/* ✅ Thumbnails Row */
.thumbnail-row {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.thumbnail-card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.thumbnail-card:hover {
  transform: scale(1.05);
}

/* ✅ Modal Styling */
.modal-container {
  width: 800px !important;
  height: 500px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* ✅ Keep Image Fixed Size */
.modal-image {
  width: 100%;
  height: 400px;
  object-fit: contain; /* Ensures image is properly displayed */
}

/* ✅ Navigation Buttons */
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.nav-button.left {
  left: 15px;
  z-index: 1;
}

.nav-button.right {
  right: 15px;
}

.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
