import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;
    },
  },
});
