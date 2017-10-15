// 防止es6语法不支持
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'
Vue.use(vueLazyLoad, {
  loading: require('common/img/default.png')
})
import 'common/less/index.less'

fastclick.attach(document.body)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: { App },
  render: h => h(App)
})
