// 防止es6语法不支持
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import store from './store'
import 'common/less/index.less'

Vue.use(vueLazyLoad, {
	loading: require('common/img/default.jpeg')
})
Vue.use(Vuex)

fastclick.attach(document.body)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	// template: '<App/>',
	// components: { App },
	render: h => h(App)
})
