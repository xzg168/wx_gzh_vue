import createPersistedState from "vuex-persistedstate";
import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {},
  actions: {},
  modules: {
    user
  },
  plugins: [
    createPersistedState({
      // vuex持久化插件
      storage: window.sessionStorage
    })
  ]
});
