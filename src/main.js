// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import LoadAnimation from './index.js'

Vue.config.productionTip = false
Vue.component('load-animation', LoadAnimation);

/* eslint-disable no-new */
new Vue({
  el: '#element-to-load',
})

