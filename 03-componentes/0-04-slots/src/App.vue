<template>
  <ModalPrincipal>
    <template #header="{ logo }">Esse é o header {{ logo }}</template>
    <template #default="{ user }">
      <h1>{{user}}</h1>
      <p>Esse é o modal.</p>
      <button>Comprar</button>
    </template>
    <template #footer>
      <p>Esse é o footer</p>
    </template>
  </ModalPrincipal>
</template>

<script>
import ModalPrincipal from "./components/ModalPrincipal";

export default {
  name: "app",
  components: {
    ModalPrincipal
  }
};
</script>

<style>
</style>