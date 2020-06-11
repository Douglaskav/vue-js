import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursosConcluidos: [],
    github: null
  },
  mutations: {
    CONCLUIR_CURSO(state, payload) {
      state.cursosConcluidos.push(payload);
    },

    UPDATE_GITHUB(state, payload) {
      state.github = payload;
    }
  },
  actions: {
    concluirCurso(context, payload) {
      context.commit("CONCLUIR_CURSO", payload);
    },
    async puxarGithub(context) {
      const response = await fetch('https://api.github.com/users/Douglaskav');
      const json = await response.json();

      context.commit("UPDATE_GITHUB", json);
    }
  },
  modules: {
  }
})
