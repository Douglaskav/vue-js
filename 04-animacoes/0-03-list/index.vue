<template>
  <div>
    <transition-group tag="ul" v-if="carrinho.length">
      <li v-for="(produto, index) in carrinho" :key="produto.nome">
        <p>{{produto.nome}}</p>
        <p>{{produto.preco}}</p>
        <button @click="remover(index)">Remover</button>
      </li>
    </transition-group>
    <transition appear v-else>
      <p>Acabou os produtos</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carrinho: [
        {
          nome: "Notebook",
          preco: 2399
        },
        {
          nome: "Smarthphone",
          preco: 3999
        }
      ]
    };
  },

  methods: {
    remover(index) {
      this.carrinho.splice(index, 1);
    }
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
  transform: translate3d(-20px, 0, 0);
}
</style>