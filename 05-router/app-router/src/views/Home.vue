<template>
  <h1 @click="navegarCursos">Essa é a home.</h1>
</template>

<script>
export default {
  name: "Home",
  methods: {
    navegarCursos() {
      setTimeout(() => {
        this.$router.push("acoes");
      }, 2000);
    }
  }
};
</script>

<style></style>
