// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ContentPlaceHolder from './ContentLoadPlaceholder.vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('cotent-placeholder', ContentPlaceHolder);

/* eslint-disable no-new */
new Vue({
  el: '#element-to-load',
})
