export default {
  name: "MoedaComponente",
  template: `
    <div>
      <p>Valor do real para dolar: {{dolar}}</p>
    </div>
  `,
  
  data() {
    return {
      dolar: 0.00
    }
  },

  methods: {
    async puxarDolar() {
      const response = await fetch('https://api.exchangeratesapi.io/latest?base=USD');
      const json = await response.json();

      this.dolar = json.rates.BRL;
    }
  },

  created() {
    this.puxarDolar();
  }
}