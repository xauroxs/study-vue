<template>
  <h2>Counter component</h2>
  <p>Count: {{ count }}</p>
  <p>Age: {{ age }}</p>
  <div>
    <button @click="incrementCount">Increase count</button>
    <button @click="decrementCount">Decrease count</button>
  </div>
  <div>
    <button @click="incrementAge">Increase age</button>
    <button @click="decrementAge">Decrease age</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Counter",
  methods: {
    ...mapMutations([
      "incrementCount",
      "decrementCount",
      "incrementAge",
      "decrementAge",
    ]),
  },
  computed: mapState({
    // get value from state
    count: (state) => state.count,

    // shorthand for `(state) => state.age`
    // cannot be used if state has an object
    // (e.g. in `state: { rectangle: { a: 1, b: 2 } }` a and b can be obtained only with arrow function)
    age: "age",
  }),
};
</script>
