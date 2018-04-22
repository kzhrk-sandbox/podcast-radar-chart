import mutationTypes from './mutationTypes';

export default {
  [mutationTypes.SET_A](state, a) {
    state.chart.a = a;
  },
  [mutationTypes.SET_B](state, b) {
    state.chart.b = b;
  },
  [mutationTypes.SET_C](state, c) {
    state.chart.c = c;
  },
  [mutationTypes.SET_D](state, d) {
    state.chart.d = d;
  },
  [mutationTypes.SET_E](state, e) {
    state.chart.e = e;
  },
  [mutationTypes.SET_F](state, f) {
    state.chart.f = f;
  }
};
