export default {
  name: "TempoComponente",
  template: `
    <div>
      <p>{{tempo}}</p>
    </div>
  `,
  data() {
    return {
      tempo: {}
    }
  },

  methods: {
    async fetchTempo() {
      const response = await fetch('https://www.metaweather.com/api/location/455825/');
      const json = await response.json();

      this.tempo = json.consolidated_weather[0].the_temp.toFixed(2);
    }
  },

  created() {
    this.fetchTempo();
  }
}