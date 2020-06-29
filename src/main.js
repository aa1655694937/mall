import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index.js'
import FastClick from 'fastclick'

import './assets/css/reset.css'

// 轮播
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)　

// import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload,{
	loading:require('./assets/img/common/placeholder.png')
})

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

//安装toast插件
// Vue.use(toast)

//解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
