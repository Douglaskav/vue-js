import Vue from 'vue'
import Vuex from 'vuex'
import github from '@/store/github.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursosConcluidos: [],
    livros: [
      {
        nome: "O Senhor dos Anéis",
        lido: true,
      },
      {
        nome: "Harry Potter",
        lido: true,
      },
      {
        nome: "As Crônicas de Gelo e Fogo",
        lido: false,
      }
    ]
  },
  mutations: {
    CONCLUIR_CURSO(state, payload) {
      state.cursosConcluidos.push(payload);
    },


  },
  actions: {
    concluirCurso(context, payload) {
      context.commit("CONCLUIR_CURSO", payload);
    },

  },

  getters: {
    livrosLidos: state => lido =>
      state.livros.filter(livro => livro.lido === lido)
  },

  modules: {
    github
  }
})
