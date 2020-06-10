<template>
  <div>
    <small v-if="ultimoCurso">Ultimo curso feito: {{ultimoCurso.nome}}</small>
    <small v-else>Faça seu primeiro curso agora.</small>
    <h3>Nossos Cursos:</h3>
    <Aulas />
  </div>
</template>

<script>
import Aulas from "./Aulas";

export default {
  name: "curso",
  components: {
    Aulas
  },

  computed: {
    ultimoCurso() {
      return this.$store.state.cursosConcluidos[
        this.$store.state.cursosConcluidos.length - 1
      ];
    }
  }
};
</script>

<style>
</style>