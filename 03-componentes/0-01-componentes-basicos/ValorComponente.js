import MoedaComponente from './MoedaComponente.js';

export default {
  name: "ValorComponente",
  template: `
    <div>
      <moeda-componente></moeda-componente>
      <p>{{marketCap}}</p>
    </div>
  `,

  components: {
    MoedaComponente
  },

  data() {
    return {
      marketCap: 0.00
    }
  },

  methods: {
    async fetchActions() {
      const response = await fetch('https://cloud.iexapis.com/stable/stock/aapl/quote?token=TOKEN');
      const json = await response.json();

      this.marketCap = json.marketCap;
    }
  },

  created() {
    this.fetchActions();
  }
}