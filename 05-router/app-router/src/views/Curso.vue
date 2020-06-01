<template>
  <div>
    <h1>Essa é a página do curso de {{curso}}.</h1>
    <router-link :to="{name: 'aulas'}">Aulas</router-link>
    <router-link :to="{name: 'descricao'}">Descrição</router-link>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Curso",
  props: ["curso"],
  methods: {
    puxarDados() {
      console.log("puxei api");
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.puxarDados();
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.puxarDados();
    next();
  },
  beforeRouteLeave(to, from, next) {
    const confirmar = confirm("Você deseja sair ?");
    if (confirmar) next();
  }
};
</script>

<style>
.topDown-enter,
.topDown-leave-to {
  transform: translate3d(0, -40px, 0) scale(0.2);
  opacity: 0;
}

.topDown-enter-active,
.topDown-leave-active {
  transform: all 3s;
}
</style>
