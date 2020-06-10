<template>
  <div>
    <p>
      {{ aulasCompletas }} de {{ totalAulas }} Aulas completas, esse é o usuário
      {{ user }}<br />
      {{ nomeMaiusculo }}
    </p>
    <button @click="handleClick">Alterar usuário</button>
    <button @click="COMPLETAR_AULA">Completar</button>
    <input type="text" v-model="novoUser" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      totalAulas: 25,
      nome: "Default",
      novoUser: "",
    };
  },
  computed: {
    ...mapState(["user", "aulasCompletas"]),
    nomeMaiusculo() {
      return this.nome.toUpperCase();
    },
  },

  methods: {
    ...mapMutations(["CHANGE_USER", "COMPLETAR_AULA"]),
    handleClick() {
      this.CHANGE_USER({
        user: this.novoUser,
      });
    },
  },
};
</script>

<style></style>
