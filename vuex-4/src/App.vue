<template>
  <h1>App component</h1>
  <Counter />
  <CounterComposition />
  <Todos />
</template>

<script>
import Counter from "./components/Counter.vue";
import Todos from "./components/Todos.vue";
import CounterComposition from "./components/CounterComposition.vue";

export default {
  name: "App",
  components: { Counter, Todos, CounterComposition },
};
</script>
