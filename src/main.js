/* eslint-disable */
import Vue from 'vue';

// Core
import App from './App.vue';
import router from './router';

// Style
import '@/@assets/css/tailwind.css'

// API
import Api from "@/@api/index.js";
Vue.prototype.$api = Api;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
