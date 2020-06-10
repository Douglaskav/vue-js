<template>
  <ul>
    <li v-for="(curso, index) in cursos" :key="curso.index">
      <p>
        <b>{{curso.nome}}</b>
        | {{curso.duracao}} horas
      </p>
      <button @click="concluirCurso(index)">Concluir</button>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";

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
    ...mapMutations(["CONCLUIR_CURSO"]),
    concluirCurso(id) {
      this.cursosConcluidos.push(this.cursos[id]);
      this.CONCLUIR_CURSO({
        curso: this.cursosConcluidos
      });
    }
  }
};
</script>

<style>
</style>