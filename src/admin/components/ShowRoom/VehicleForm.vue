<template>
  <v-dialog v-model="dialog" max-width="800px">
    <v-card>
      <v-card-title class="d-flex align-center justify-space-between">
        Post a New Vehicle
        <v-btn icon @click="closeDialog" variant="flat">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-form>
          <!-- Vehicle Details -->
          <v-text-field
            v-model="vehicle.title"
            label="Title"
            required
          ></v-text-field>
          <v-textarea
            v-model="vehicle.description"
            label="Description"
            required
          ></v-textarea>
          <v-text-field
            v-model="vehicle.price"
            label="Price"
            type="number"
            prefix="N$"
            required
          ></v-text-field>
          <v-select
            v-model="vehicle.transmission"
            :items="['Manual', 'Automatic']"
            label="Transmission"
            required
          ></v-select>

          <!-- Image Upload Section -->
          <v-file-input
            label="Upload Images"
            multiple
            accept="image/*"
            @change="handleImageUpload"
            show-size
          ></v-file-input>

          <!-- Image Previews -->
          <v-container>
            <v-row>
              <v-col
                v-for="(image, index) in imagePreviews"
                :key="index"
                cols="12"
                sm="4"
              >
                <v-card outlined>
                  <v-img :src="image.url" height="150px" cover></v-img>
                  <v-card-actions class="justify-center">
                    <v-btn
                      icon
                      @click="setMainImage(index)"
                      :color="image.isMain ? 'primary' : ''"
                    >
                      <v-icon>{{
                        image.isMain ? "mdi-star" : "mdi-star-outline"
                      }}</v-icon>
                    </v-btn>
                    <v-btn icon @click="removeImage(index)">
                      <v-icon color="red">mdi-delete</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" text @click="closeDialog">Cancel</v-btn>
        <v-btn color="primary" @click="submitVehicle">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps({ modelValue: Boolean });
const emit = defineEmits(["update:modelValue", "posted"]);

const dialog = ref(props.modelValue);

// Watch for dialog open/close
watch(
  () => props.modelValue,
  (newVal) => {
    dialog.value = newVal;
  }
);

const vehicle = ref({
  title: "",
  description: "",
  price: "",
  transmission: "",
  images: [],
  mainImage: null, // For the cover image
});

const imagePreviews = ref([]);

// ✅ Handle image upload
const handleImageUpload = (event) => {
  const files = event.target.files;
  for (const file of files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreviews.value.push({ url: e.target.result, file, isMain: false });
      vehicle.value.images.push(file);
    };
    reader.readAsDataURL(file);
  }
};

// ✅ Set main (cover) image
const setMainImage = (index) => {
  imagePreviews.value.forEach((img, idx) => (img.isMain = idx === index));
  vehicle.value.mainImage = imagePreviews.value[index].file.name; // ✅ Send the file name
};

// ✅ Remove an image
const removeImage = (index) => {
  const removedImage = imagePreviews.value[index];
  imagePreviews.value.splice(index, 1);
  vehicle.value.images.splice(index, 1);

  // ✅ Reset main image if deleted
  if (vehicle.value.mainImage === removedImage.file.name) {
    vehicle.value.mainImage = null;
  }
};

// ✅ Submit the vehicle form
const submitVehicle = async () => {
  try {
    const formData = new FormData();
    formData.append("title", vehicle.value.title);
    formData.append("description", vehicle.value.description);
    formData.append("price", vehicle.value.price);
    formData.append("transmission", vehicle.value.transmission);
    formData.append("mainImage", vehicle.value.mainImage); // ✅ Correct key

    for (const image of vehicle.value.images) {
      formData.append("images", image);
    }

    const response = await fetch("http://localhost:3001/api/showroom", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      emit("posted"); // ✅ Refresh vehicle list
      resetForm(); // ✅ Clear form after submission
      closeDialog(); // ✅ Close the modal
    } else {
      console.error("Submission failed.");
    }
  } catch (error) {
    console.error("Error submitting vehicle:", error);
  }
};

// ✅ Close the dialog
const closeDialog = () => {
  emit("update:modelValue", false);
};

// ✅ Reset form after submission
const resetForm = () => {
  vehicle.value = {
    title: "",
    description: "",
    price: "",
    transmission: "",
    images: [],
    mainImage: null,
  };
  imagePreviews.value = [];
};
</script>
<style scoped>
.v-card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>