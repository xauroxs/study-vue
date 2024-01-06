import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref([]);

  const filterCompleted = computed(() =>
    todos.value.filter((todo) => todo.completed)
  );
  const filterIncompleted = computed(() =>
    todos.value.filter((todo) => !todo.completed)
  );
  const countCompleted = computed(() => filterCompleted.value.length);

  async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    todos.value = data;
  }

  return {
    todos,
    filterCompleted,
    filterIncompleted,
    countCompleted,
    getTodos,
  };
});
