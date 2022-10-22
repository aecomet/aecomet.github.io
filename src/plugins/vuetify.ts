import '@fortawesome/fontawesome-free/css/all.css'; // Ensure your project is capable of handling css files
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles'; // Global CSS has to be imported

import { createVuetify } from 'vuetify';
import { aliases, fa } from 'vuetify/iconsets/fa';

const options = {
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  }
};

export default createVuetify(options);
