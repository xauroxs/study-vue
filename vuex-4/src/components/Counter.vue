<template>
  <h2>Counter component</h2>
  <p>Counter: {{ count }}</p>
  <button @click="increment">Increase counter</button>
</template>

<script>
export default {
  name: "Counter",
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>
