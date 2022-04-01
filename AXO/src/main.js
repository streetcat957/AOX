// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,Select,Cascader,Input,Tag} from 'element-ui'
import axios from 'axios'
import store from './store'
import api from './api/index'

Vue.use(Button)
Vue.use(Cascader)
Vue.use(Input)
Vue.use(Tag)

Vue.config.productionTip = false
// Vue.prototype.$axios = axios
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render:h =>h(App)
}).$mount('#app')
