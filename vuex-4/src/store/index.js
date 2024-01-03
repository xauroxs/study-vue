import { createStore } from "vuex";

import countStore from "./count.store";
import userStore from "./user.store";

const store = createStore({
  modules: {
    count: countStore,
    user: userStore,
  },
});

export default store;
