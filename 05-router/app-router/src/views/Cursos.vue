<template>
  <div>
    <h1>Nossos Cursos:</h1>
    <router-link :to="{name: 'cursos', params: { curso: 'HTML' }}">HTML</router-link>
    <router-link to="/cursos/JavaScript">JavaScript</router-link>
    <router-link to="/cursos/React">React</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Cursos",
  props: ["curso"],
  
};
</script>

<style></style>
