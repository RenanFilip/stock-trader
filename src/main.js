import Vue from 'vue'
import App from './App.vue'
import './plugins/axios'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.filter('currency', value => {
  return 'R$ ' + value.toLocaleString()
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
