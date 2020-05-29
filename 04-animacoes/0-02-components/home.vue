<template>
  <div>
    <ul>
      <li @click="componenteAtivo = 'PaginaSobre'">Sóbre</li>
      <li @click="componenteAtivo = 'PaginaServicos'">Serviços</li>
    </ul>
    <transition mode="out-in">
      <component :is="componenteAtivo"></component>
    </transition>
  </div>
</template>

<script>
import PaginaSobre from "./PaginaSobre";
import PaginaServicos from "./PaginaServicos";

export default {
  data() {
    return {
      componenteAtivo: "PaginaSobre"
    };
  },

  components: {
    PaginaSobre,
    PaginaServicos
  }
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(0, -20px, 0);
}
</style>