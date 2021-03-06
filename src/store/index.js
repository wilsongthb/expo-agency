import BackendService from "src/BackendService";
import Vue from "vue";
import Vuex from "vuex";

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    state: {
      user: {},
    },

    mutations: {
      setUser(state, payload) {
        state.user = payload;
      },
    },

    actions: {
      //
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING,
  });

  if (localStorage.getItem("token")) {
    BackendService.getCurrentUser().then((user) => {
      Store.commit("setUser", user);
    });
  }

  return Store;
}
