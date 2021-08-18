<template>
  <div>
    <h2>tipo de Cuenta: {{ cuenta }}</h2>
    <h2>Saldo: {{ saldo }}</h2>
    <h2>Cuenta: {{ estado ? "Activa" : "Inactiva" }}</h2>

    <div v-for="(item, index) in servicios" :key="index">
      {{ index + 1 }} - {{ item }}
    </div>
    <AccionSaldo 
        texto="Aumentar saldo" 
        @accion="aumentar"
    />
    <AccionSaldo 
        texto="Disminuir saldo"
        @accion="disminuir" 
        :desactivar="desactivar"
    />
  </div>
</template>

<script>
import AccionSaldo from "./AccionSaldo";

export default {
  name: "cuenta",
  components: {
    AccionSaldo,
  },
  data() {
    return {
      saldo: 1000,
      cuenta: "visa",
      estado: true,
      servicios: ["giro", "abono", "transferencia"],
      desactivar: false
    };
  },
  methods: {
    aumentar() {
        this.desactivar = false;
      this.saldo = this.saldo + 100;
    },
    disminuir() {
        if (this.saldo == 0) {
            this.desactivar = true;
            alert('No puede tener un saldo menor a cero');
            return
        }
      this.saldo = this.saldo - 100;
    },
  },
};
</script>

<style></style>
