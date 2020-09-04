import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locale: (() => {
      if (
        typeof window !== "undefined" &&
        window.navigator.language.startsWith("zh")
      ) {
        return "zh-CN";
      }
      return "en";
    })()
  },
  getters: {
    locale(state) {
      return state.locale;
    }
  },
  mutations: {
    toggleLocale(state) {
      switch (state.locale) {
        case "en":
          state.locale = "zh-CN";
          break;
        case "zh-CN":
          state.locale = "en";
          break;
      }
    }
  },
  actions: {
    toggleLocale(context) {
      context.commit("toggleLocale");
    }
  },
  modules: {}
});
