<template>
  <h2>Counter component</h2>
  <p>Count: {{ count }}</p>
  <button type="button" @click="incrementCount">Increase count</button>
  <button type="button" @click="decrementCount">Decrease count</button>
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useCounterStore } from "@/stores/counter";

export default {
  name: "Counter",
  computed: {
    ...mapState(useCounterStore, ["count"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["incrementCount", "decrementCount"]),
  },
};
</script>
