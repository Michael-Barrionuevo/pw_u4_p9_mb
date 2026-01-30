<template>
  <div class="vista">
    <h1>Nuevo Estudiante</h1>
    <div class="form">
      <input v-model="est.nombre" placeholder="Nombre">
      <input v-model="est.apellido" placeholder="Apellido">
      <input v-model="est.fechaNacimiento" type="date">
      <input v-model="est.provincia" placeholder="Provincia">
      <select v-model="est.genero">
        <option value="" disabled>Seleccione Género</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </select>
      <button @click="guardar">Registrar</button>
    </div>
  </div>
</template>

<script>
import { guardarFachada } from "@/client/MatriculaClient.js";
export default {
  data: () => ({ est: { nombre: '', apellido: '', fechaNacimiento: '', provincia: '', genero: '' } }),
  methods: {
    async guardar() {
      await guardarFachada(this.est);
      alert("Guardado!");
      this.$router.push('/consultar');
    }
  }
}
</script>