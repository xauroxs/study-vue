const todosStore = {
  state() {
    return {
      todos: [],
    };
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
  },
  actions: {
    getTodos(context) {
      const { commit } = context;

      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((todos) => commit("setTodos", todos));
    },
  },
  getters: {
    filterDoneTodos(state) {
      return state.todos.filter((todo) => todo.completed);
    },
    countDoneTodos(state, getters) {
      return getters.filterDoneTodos.length;
    },
  },
};

export default todosStore;
