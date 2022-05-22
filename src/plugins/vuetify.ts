import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles'; // Global CSS has to be imported

import { createVuetify } from 'vuetify';

const options = {
  components,
  directives
};

export default createVuetify(options);
