<template>
  <h2>Todos component</h2>
  <p>Completed todos: {{ countDoneTodos }}</p>
  <div v-for="{ id, title, completed } in todos" :key="id">
    <p :class="completed ? 'lineThrough' : ''">{{ title }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["getTodos"]),
  },
  computed: {
    ...mapState({
      todos: (state) => state.todos.todos,
    }),
    ...mapGetters(["filterDoneTodos", "countDoneTodos"]),
  },
  mounted() {
    this.$store.dispatch("getTodos");
  },
};
</script>

<style scoped>
.lineThrough {
  text-decoration: line-through;
}
</style>
