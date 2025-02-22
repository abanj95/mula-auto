<template>
    <v-container>
      <v-btn color="grey" @click="goBack">← Back to Showroom</v-btn>
  
      <v-card class="pa-5 mt-3">
        <v-card-title>Edit Vehicle Details</v-card-title>
        <v-divider></v-divider>
  
        <!-- Vehicle Details -->
        <v-form>
          <v-text-field v-model="vehicle.title" label="Title" required></v-text-field>
          <v-textarea v-model="vehicle.description" label="Description" required></v-textarea>
          <v-text-field v-model="vehicle.price" label="Price" type="number" required></v-text-field>
          <v-text-field v-model="formattedDate" label="Date Posted" readonly></v-text-field>
          <v-select
            v-model="vehicle.transmission"
            :items="['Manual', 'Automatic']"
            label="Transmission"
            required
          ></v-select>
        </v-form>
  
        <v-divider class="my-3"></v-divider>
  
        <!-- Uploaded Images -->
        <v-card-subtitle>Uploaded Images</v-card-subtitle>
        <v-row>
          <v-col v-for="(image, index) in vehicle.images" :key="index" cols="12" sm="4">
            <v-card>
              <v-img :src="getImageUrl(image)" height="150px" contain></v-img>
              <v-card-actions class="justify-center">
                <v-btn icon @click="setAsCoverImage(image)">
                  <v-icon :color="isCoverImage(image) ? 'orange' : 'grey'">
                    {{ isCoverImage(image) ? 'mdi-star' : 'mdi-star-outline' }}
                  </v-icon>
                </v-btn>
                <v-btn icon @click="deleteImage(image)">
                  <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
  
        <v-divider class="my-3"></v-divider>
  
        <!-- Upload New Images -->
        <v-file-input
          multiple
          accept="image/*"
          label="Add More Images"
          @change="handleImageUpload"
        ></v-file-input>
  
        <v-divider class="my-3"></v-divider>
  
        <!-- Actions -->
        <v-card-actions class="justify-end">
          <v-btn color="grey" text @click="goBack" variant="tonal">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="saveChanges" variant="outlined">Save Changes</v-btn>
        </v-card-actions>
      </v-card>
  
      <!-- Success Notification -->
      <v-snackbar v-model="successAlert" color="green" top right>
        Vehicle updated successfully!
      </v-snackbar>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  const vehicle = ref({});
  const successAlert = ref(false);
  
  // Fetch Vehicle Details
  onMounted(async () => {
    const response = await fetch(`http://localhost:3001/api/showroom/${route.params.id}`);
    vehicle.value = await response.json();
  });
  
  // Format Date
  const formattedDate = computed(() => {
    if (vehicle.value.date_posted) {
      const date = new Date(vehicle.value.date_posted);
      return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }
    return '';
  });
  
  // Go Back to Showroom
  const goBack = () => {
    router.push({ name: 'Showroom' });
  };
  
  // Handle Image Upload
  const handleImageUpload = (event) => {
    const files = event.target.files;
    for (const file of files) {
      vehicle.value.images.push(file);
    }
  };
  
  // Delete Image
  const deleteImage = (image) => {
    vehicle.value.images = vehicle.value.images.filter((img) => img !== image);
    if (vehicle.value.main_image === image) {
      vehicle.value.main_image = null;
    }
  };
  
  // Set Cover Image
  const setAsCoverImage = (image) => {
    vehicle.value.main_image = image;
  };
  
  // Check if Image is Cover Image
  const isCoverImage = (image) => {
    return vehicle.value.main_image === image;
  };
  
  // Save Changes
  const saveChanges = async () => {
  try {
    const formData = new FormData();
    formData.append('title', vehicle.value.title);
    formData.append('description', vehicle.value.description);
    formData.append('price', vehicle.value.price);
    formData.append('transmission', vehicle.value.transmission);
    formData.append('date_posted', vehicle.value.date_posted);
    formData.append('main_image', vehicle.value.main_image);

    // Handling new images
    vehicle.value.images.forEach((image) => {
      if (typeof image !== 'string') { // Only new files
        formData.append('images', image);
      }
    });

    // Handling deleted images
    if (vehicle.value.deletedImages && vehicle.value.deletedImages.length) {
      formData.append('deletedImages', JSON.stringify(vehicle.value.deletedImages));
    }

    const response = await fetch(`http://localhost:3001/api/showroom/${route.params.id}`, {
      method: 'PUT',
      body: formData,
    });

    if (response.ok) {
      console.log('Vehicle updated successfully!');
      router.push({ name: 'Showroom' }); // Redirect to Showroom page
    } else {
      const error = await response.json();
      console.error('Failed to update vehicle:', error);
    }
  } catch (error) {
    console.error('Error updating vehicle:', error);
  }
};


  
  // Generate Image URL
  const getImageUrl = (path) => {
    return path.startsWith('http') ? path : `http://localhost:3001/showroom_uploads/${path}`;
  };
  </script>
  
  <style scoped>
  .v-btn {
    margin: 5px;
  }
  </style>
  