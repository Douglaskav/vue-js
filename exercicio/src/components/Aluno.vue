<template>
  <div>
    <h2>Aluno: {{nome}}</h2>
    <h3>Cursos Concluidos:</h3>
    <ul>
      <li v-for="(curso, index) in $store.state.cursosConcluidos" :key="index">
        <p>
          <b>{{curso.nome}}</b>
          | {{curso.duracao}} horas
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "aluno",
  data() {
    return {
      nome: "Gabriel Medina"
    };
  }
};
</script>

<style>
</style>