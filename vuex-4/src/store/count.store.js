const countStore = {
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    incrementCount(state) {
      state.count++;
    },
    decrementCount(state) {
      state.count--;
    },
  },
};

export default countStore;
