// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Ensure you import Vuetify styles
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // For icon support

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#111432', // Your primary color
          secondary: '#424242', // Your secondary color
          accent: '#82B1FF', // Your accent color
          error: '#FF5252', // Your error color
          info: '#2196F3', // Your info color
          success: '#4CAF50', // Your success color
          warning: '#FFC107', // Your warning color
          background: '#FFFFFF', // Your background color
          customColor: '#111432', // Add your custom color here
        },
      },
      dark: {
        colors: {
          primary: '#111432', // Dark theme primary color
          secondary: '#424242', // Dark theme secondary color
          background: '#121212', // Dark theme background color
          customColor: '#1E1E1E', // Custom color for dark theme
        },
      },
    },
  },
});