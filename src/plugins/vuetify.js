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
});
