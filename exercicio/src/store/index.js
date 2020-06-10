import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursosConcluidos: []
  },
  mutations: {
    CONCLUIR_CURSO(state, payload) {
      state.cursosConcluidos = [];
      payload.curso.forEach((curso) => {
        state.cursosConcluidos.push(curso);
      })
      console.log(state.cursosConcluidos)
    }
  },
  actions: {
  },
  modules: {
  }
})
