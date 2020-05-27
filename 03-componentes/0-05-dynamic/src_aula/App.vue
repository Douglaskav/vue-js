<template>
  <div id="app">
    <button @click="componenteAtivo = 'AulaDescricao'">Descrição</button>
    <button @click="componenteAtivo = 'AulaDownload'">Download</button>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import AulaDescricao from "./components/AulaDescricao";
import AulaDownload from "./components/AulaDownload";

export default {
  name: "app",
  components: {
    AulaDescricao,
    AulaDownload,
  },
  data() {
    return {
      componenteAtivo: "AulaDescricao",
    };
  },
};
</script>

<style></style>
