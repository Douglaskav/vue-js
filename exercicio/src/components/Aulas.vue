<template>
  <ul>
    <li v-for="(curso, index) in cursos" :key="index">
      <p>
        <b>{{curso.nome}}</b>
        | {{curso.duracao}} horas
      </p>
      <button @click="concluirCurso(curso)">Concluir</button>
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "aulas",
  data() {
    return {
      cursos: [
        { nome: "HTML e CSS", duracao: 15 },
        {
          nome: "JavaScript",
          duracao: 30
        },
        {
          nome: "UX Design",
          duracao: 20
        }
      ],
      cursosConcluidos: []
    };
  },
  methods: {
    ...mapActions(["concluirCurso"])
  }
};
</script>

<style>
</style>