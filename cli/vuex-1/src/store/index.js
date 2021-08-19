import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 50
  },
  mutations: {
    incrementar(state, payload) {
      state.contador = state.contador + payload
    },
    decrementar(state, payload) {
      state.contador = state.contador - payload
    }
  },
  actions: {
    accionIncrementar ({ commit }) {
      commit('incrementar', 15);
    },
    accionDisminuir ({ commit }, numero) {
      commit('decrementar', numero);
    }, 
    accionBoton ({ commit }, objeto) {
      if (objeto.estado) {
        commit('incrementar', objeto.numero)
      } else {
        commit('decrementar', objeto.numero)
      }
    } 
  },
  modules: {
  }
})
