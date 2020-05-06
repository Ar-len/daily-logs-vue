// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Api from './api/index.js'
import 'vue-beauty/package/style/vue-beauty.min.css'
// 引入并注册ui组件
import vueBeauty from 'vue-beauty'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(vueBeauty)
Vue.prototype.$api = Api
Vue.prototype.$axios = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
