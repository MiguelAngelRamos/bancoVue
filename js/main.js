const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      titulo: "Banco Vue",
      servicios: ['Prestamos', 'Cuenta Corriente', 'Giros', 'Depositos'],
      saldo: 1000000,
      estado: true,
      fecha: '24-02-2022'
    }
  }
});