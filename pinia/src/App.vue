<template>
  <h1>App component</h1>
  <Counter />
  <Todos />
</template>

<script>
import Counter from "./components/Counter.vue";
import Todos from "./components/Todos.vue";

export default {
  name: "App",
  components: { Counter, Todos },
};
</script>
