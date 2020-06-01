<template>
  <div>
    <h1>Nossos Cursos:</h1>
    <router-link :to="{ name: 'cursos', params: { curso: 'HTML' } }">HTML</router-link>
    <router-link to="/cursos/JavaScript">JavaScript</router-link>
    <router-link to="/cursos/React">React</router-link>
    <transition mode="out-in">
      <router-view :key="curso"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["curso"]
};
</script>

<style>
</style>
