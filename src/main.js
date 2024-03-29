// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import element from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'

Vue.use(element)

Vue.directive('document-click', {
  bind (el, bindings, vnode) {
    document.addEventListener('click', bindings.value, false)
  },
  inserted (el, bindings, vnode) {

  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
