// 防止es6语法不支持
import 'babel-polyfill'
import 'amfe-flexible'
import Vue from 'vue'
import App from './App'
import { createRouter } from './router'
import fastclick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import { createStore } from './store'
import 'common/less/index.less'
import * as _ from 'lodash'
import { sync } from 'vuex-router-sync'
// import vConsole from 'vconsole'
Vue.use(vueLazyLoad, {
  loading: require('common/img/default.jpeg')
})
Vue.use(Vuex)
// window.addEventListener('resize', _.debounce(function () {
// 	location.reload()
// }, 500))
fastclick.attach(document.body)

Vue.config.productionTip = false
/* eslint-disable no-new */
export function createApp() {
  const router = createRouter()
  const store = createStore()

  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
