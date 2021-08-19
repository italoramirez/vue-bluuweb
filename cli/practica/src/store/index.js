import { createStore } from 'vuex'

export default createStore({
  state: {
    contar: 10
  },
  mutations: {
    contarNumuero (state) {
      state.contar = state.contar + 5
    }
  },
  actions: {
    incrementar ({ commit }) {
      commit('contarNumuero');
    }
  },
  modules: {
  }
})
