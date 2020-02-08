import Vue from 'vue'
import App from './App.vue'
import router from './router'

require('./assets/sass/main.scss');

Vue.config.productionTip = false;
Vue.prototype.service_url = process.env.VUE_APP_SERVICE_URL;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
