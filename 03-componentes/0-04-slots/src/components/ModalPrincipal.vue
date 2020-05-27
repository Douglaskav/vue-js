<template>
  <div class="modal">
    <slot name="header" :logo="logo"></slot>
    <slot :user="user.name"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal",
  data() {
    return {
      logo: "Techno",
      user: {
        name: "Douglas"
      }
    };
  }
};
</script>

<style>
</style>