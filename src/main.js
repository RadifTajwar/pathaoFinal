import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Toasted from 'vue-toasted'
Vue.config.productionTip = false
Vue.use(Toasted, {
  duration: 2000,
  position: 'top-right',
  theme: 'toasted-primary', 
  iconPack: 'material',     
  className: 'custom-toast bg-blue-500', 
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
