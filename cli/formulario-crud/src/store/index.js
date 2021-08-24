import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea : {
      id         : '',
      nombre     : '',
      categorias : [],
      estado     : '',
      numero     : 0
    }

  },
  mutations: {
    set(state, payload) {
      state.tareas.push(payload);
      localStorage.setItem('task', JSON.stringify(state.tareas)) 
      console.log(Object);
    },
    delete (state, payload) {
      state.tareas = state.tareas.filter( item => item.id !== payload)
      localStorage.setItem('task', JSON.stringify(state.tareas))
    },
    tarea (state, payload) {
      if ( !state.tareas.find(item => item.id === payload) ) {
        router.push('/');
        return;
      }
      state.tarea = state.tareas.find(item => item.id === payload);
    },
    update (state, payload) {
      state.tareas = state.tareas.map( item => payload.id ? payload : item);
      router.push('/');
      localStorage.setItem('task', JSON.stringify(state.tareas))
    },
    cargar ( state, payload) {
      state.tareas = payload;
    }
  },
  actions: {
    setTareas ({ commit }, tarea ) {
      commit('set', tarea)
    },
    deleteTask ({ commit }, id) {
      commit('delete', id);
    },
    setTask ({ commit }, id) {
      commit('tarea', id)
    }, 
    update ({ commit }, tarea) {
      commit('update', tarea);
      console.log(tarea)
    },
    cargarLocalStorage ({ commit }) {
      if ( localStorage.getItem('task') ) {
        // const task = JSON.parse(localStorage.getItem('task'))
        // commit('cargar', task);
        // return;
      }

      localStorage.setItem('task', JSON.stringify([]));

    }
  },
  modules: {
  }
})
