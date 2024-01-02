import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      age: 18,
    };
  },
  mutations: {
    incrementCount(state) {
      state.count++;
    },
    decrementCount(state) {
      state.count--;
    },
    incrementAge(state) {
      state.age++;
    },
    decrementAge(state) {
      state.age--;
    },
  },
});

export default store;
