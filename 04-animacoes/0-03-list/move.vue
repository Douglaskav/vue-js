<template>
  <div>
    <button @click="filterAZ">A - Z</button>
    <button @click="filterZA">Z - A</button>
    <transition-group tag="ul">
      <li v-for="filme in filmes" :key="filme">{{filme}}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmes: [
        "Senhor Dos Aneis",
        "As cronicas de Narnia",
        "Coração Valente",
        "Harry Potter"
      ]
    };
  },

  methods: {
    filterAZ() {
      this.filmes.sort();
    },

    filterZA() {
      this.filmes.sort().reverse();
    }
  }
};
</script>

<style>
.v-move {
  transition: transform 0.3s;
}

li {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 20px;
  max-width: 200px;
  margin-bottom: 10px;
}
</style>