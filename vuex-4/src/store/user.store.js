const userStore = {
  state() {
    return {
      name: "John",
      age: 18,
    };
  },
  mutations: {
    changeName(state, payload) {
      state.name = payload;
    },
    incrementAge(state) {
      state.age++;
    },
    decrementAge(state) {
      state.age--;
    },
  },
};

export default userStore;
