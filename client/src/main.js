import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import apiUsers from './api/index'
import VueToast from 'vue-toast-notification'
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css'

Vue.prototype.$api = apiUsers
Vue.use(VueAxios, axios)
Vue.use(VueToast)
Vue.config.productionTip = false

new Vue({
  router,
  apiUsers,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
