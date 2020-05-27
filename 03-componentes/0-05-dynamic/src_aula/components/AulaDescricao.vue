<template>
  <div>
    <p>Essa é a aula principal do curso.</p>
  </div>
</template>

<script>
export default {
  name: "AulaDescricao",
  destroyed() {
    console.log("Descrição Destruido");
  },
};
</script>

<style></style>
