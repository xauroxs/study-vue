<template>
  <h2>Todos component</h2>
  <p>Completed: {{ countCompleted }}</p>
  <div v-for="{ id, title } in filterIncompleted" :key="id">
    <p>{{ title }}</p>
  </div>
  <div v-for="{ id, title } in filterCompleted" :key="id">
    <p class="lineThrough">{{ title }}</p>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

import { useTodosStore } from "@/stores/todos";

const store = useTodosStore();

const { filterCompleted, filterIncompleted, countCompleted } =
  storeToRefs(store);
const { getTodos } = store;

onMounted(() => {
  getTodos();
});
</script>

<style scoped>
.lineThrough {
  text-decoration: line-through;
}
</style>
