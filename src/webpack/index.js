import Vue from 'vue';
import store from './store';
import App from './app.vue';

window.addEventListener(
  'load',
  () => {
    new Vue({
      el: '#app',
      render: h => h(App),
      store
    });
  },
  false
);
