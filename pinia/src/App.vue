<template>
  <h1>App component</h1>
  <Counter />
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: { Counter },
};
</script>
