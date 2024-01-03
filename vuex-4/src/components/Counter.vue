<template>
  <h2>Counter component</h2>
  <p>Count: {{ count }}</p>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <div>
    <button @click="incrementCount">Increase count</button>
    <button @click="decrementCount">Decrease count</button>
  </div>
  <div>
    <input type="text" v-model="newName" />
    <button @click="() => changeName(newName)">Change name</button>
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
  data() {
    return {
      newName: "",
    };
  },
  methods: {
    ...mapMutations([
      "incrementCount",
      "decrementCount",
      "changeName",
      "incrementAge",
      "decrementAge",
    ]),
  },
  computed: mapState({
    // get value from state
    count: (state) => state.count.count,

    name: (state) => state.user.name,
    age: (state) => state.user.age,
  }),
};
</script>
