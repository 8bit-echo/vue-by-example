import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // state contains any data which needs to be accessed by multiple components
    globalMessage: 'I can be accessed from all components',
    joke: '',
  },

  getters: {
    // getters are exactly like "computed", but for global state.
  },
  mutations: {
    // mutations are synchronous changes to the state. they don't need to wait for anything in order to run.
    changeGlobalMessage(state, payload) {
      state.globalMessage = payload;
    },

    changeJoke(state, joke) {
      state.joke = joke;
    },
  },
  actions: {
    // actions are mutations that require async operations, like reaching out to an API, setTimeout operations, or promises.
    getJoke: async ({ commit }) => {
      const response = await fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
      const { joke } = await response.json();
      commit('changeJoke', joke);
    },
  },
  modules: {},
});
