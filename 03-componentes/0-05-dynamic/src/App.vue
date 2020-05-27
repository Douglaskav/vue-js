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
import SobreEmpresa from "./components/SobreEmpresa";
import ServicosEmpresa from "./components/ServicosEmpresa";
import ContatoEmpresa from "./components/ContatoEmpresa";

export default {
  name: "app",
  components: {
    SobreEmpresa,
    ServicosEmpresa,
    ContatoEmpresa,
  },
  data() {
    return {
      paginaAtual: "SobreEmpresa",
    };
  },
};
</script>

<style></style>
