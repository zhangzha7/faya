import Vue from 'vue'
import App from './App'
import base from './utils/base'

Vue.config.productionTip = false
Vue.prototype.base=base
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
