<template>
  <div id="app">
    <Aluno />
    <Curso />
    {{$store.state.github}}
  </div>
</template>

<script>
import Aluno from "./components/Aluno";
import Curso from "./components/Curso";

export default {
  name: "App",
  components: {
    Aluno,
    Curso
  },
  created() {
    this.$store.dispatch("puxarGithub");
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
