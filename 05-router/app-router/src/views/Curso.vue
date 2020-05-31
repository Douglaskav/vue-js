<template>
  <div>
    <h1>Essa é a página do curso de {{curso}}.</h1>
    <router-link :to="{name: 'aulas'}">Aulas</router-link>
    <router-link :to="{name: 'descricao'}">Descrição</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Curso",
  props: ["curso"],
  created() {
    console.log("Esse componente foi criado.");
  },
  beforeRouteUpdate(to, from, next) {
    next();
  }
};
</script>

<style></style>
