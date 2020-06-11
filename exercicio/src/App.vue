<template>
  <div id="app">
    <ul>
      <li v-for="livro in $store.state.livros" :key="livro.nome">
        <p>{{livro.nome}}</p>
      </li>
    </ul>
    <ul>
      <h2>Livros lidos</h2>
      <li v-for="livro in livrosLidos(true)" :key="livro.nome">
        <p>{{livro.nome}}</p>
      </li>
    </ul>
    {{$store.state.github.github}}
    <Aluno />
    <Curso />
  </div>
</template>

<script>
import Aluno from "./components/Aluno";
import Curso from "./components/Curso";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Aluno,
    Curso
  },

  computed: {
    ...mapGetters(["livrosLidos"])
  },

  created() {
    this.$store.dispatch("github/puxarGithub");
  }
};
</script>

<style>
#app {
  display: flex;
  margin: 30px 100px;
  justify-content: space-between;
}
</style>
