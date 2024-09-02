import { createStore } from 'vuex';

export default createStore({
  state: {
    isCollapse: false,
  },
  mutations: {
    switchCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
  actions: {},
  modules: {},
});