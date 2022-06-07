import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import lodash from 'lodash'

Vue.config.productionTip = false

Vue.prototype.$_ = lodash

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
