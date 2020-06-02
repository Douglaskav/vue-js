<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h2>Ações Dados</h2>
      <p>{{simbolo}}</p>
      <div>{{acao}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["simbolo"],
  data() {
    return {
      token: "",
      loading: true,
      acao: null
    };
  },
  methods: {
    async puxarAcao() {
      this.loading = true;
      this.acao = null;

      const response = await fetch(
        `https://cloud.iexapis.com/stable/stock/${this.simbolo}/quote?token=${this.token}`
      );
      const json = await response.json();

      this.acao = json;
      this.loading = false;
    }
  },

  created() {
    this.puxarAcao(this.simbolo);
  },

  watch: {
    $route: "puxarAcao"
  }
};
</script>

<style>
</style>