import { createApp } from 'vue';
import VueGeolocation from 'vue3-geolocation';
import GMaps from 'vuejs3-google-maps';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(VueGeolocation)
  .use(GMaps, {
    load: {
      apiKey: process.env.VUE_APP_MYKEY,
      libraries: ['places'],
    },
  })
  .mount('#app');
