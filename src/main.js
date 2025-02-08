import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCxcxrC_6zyUokJ4ewVal-3m_DduyBzWGw',
  },
}).mount('#app');

createApp(App).mount('#app')
 