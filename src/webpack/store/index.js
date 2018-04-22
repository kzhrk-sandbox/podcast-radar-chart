import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chart: {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0
    }
  },

  mutations,

  strict: true
});
