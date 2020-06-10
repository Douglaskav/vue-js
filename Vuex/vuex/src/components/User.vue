<template>
  <div>
    <p>{{ user }}, {{ aulasCompletas }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    aulasCompletas() {
      return this.$store.state.aulasCompletas;
    },

    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style></style>
