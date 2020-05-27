<template>
  <div id="app">
    <button @click="paginaAtual = 'SobreEmpresa'">Sóbre</button>
    <button @click="paginaAtual = 'ServicosEmpresa'">Serviços</button>
    <button @click="paginaAtual = 'ContatoEmpresa'">Contato</button>
    <keep-alive>
      <component :is="paginaAtual"></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    ServicosEmpresa() {
      return import("./components/ServicosEmpresa");
    },
    ContatoEmpresa() {
      return import("./components/ContatoEmpresa");
    },
  },
  data() {
    return {
      paginaAtual: "SobreEmpresa",
    };
  },
};
</script>

<style></style>
