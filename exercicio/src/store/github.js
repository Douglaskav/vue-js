export default {
  namespaced: true,
  state: {
    github: null
  },

  mutations: {
    UPDATE_GITHUB(state, payload) {
      state.github = payload;
    }
  },

  actions: {
    async puxarGithub(context) {
      const response = await fetch('https://api.github.com/users/Douglaskav');
      const json = await response.json();

      context.commit("UPDATE_GITHUB", json);
    }
  }

}