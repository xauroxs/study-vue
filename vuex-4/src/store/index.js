import { createStore } from "vuex";

import countStore from "./count.store";
import userStore from "./user.store";
import todosStore from "./todos.store";

const store = createStore({
  modules: {
    count: countStore,
    user: userStore,
    todos: todosStore,
  },
});

export default store;
