// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  el: '#app',
  router,
  // 与components: { App: APP }一致,下面是es6的写法
  components: { App },
  template: '<App/>'
})
