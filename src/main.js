// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
// 按需导入mintUI中组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
// 引入css样式
// import './static/css/reset.css'
// 导入MUI的样式
// import './lib/mui/css/mui.min.css'
// import './lib/mui/css/icons-extra.css'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name, Header)

Vue.config.productionTip = false

// // 解决点击响应延时 0.3s 问题的src
// require('https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
