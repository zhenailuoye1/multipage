import Vue from 'vue';
import App from './App';
import 'alloyTouch';
import '../../lib/transform.js';
import vueAlloyTouch from '../../lib/alloy_touch.vue.js';

Vue.use(vueAlloyTouch);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    wrapper_height: 0
  }
})
