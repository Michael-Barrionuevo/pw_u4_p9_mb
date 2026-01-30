<template>
  <div class="vista">
    <h1>Actualización Total</h1>
    <div class="form">
      <input v-model="id" placeholder="ID a editar">
      <hr>
      <input v-model="est.nombre" placeholder="Nombre">
      <input v-model="est.apellido" placeholder="Apellido">
      <input v-model="est.fechaNacimiento" type="date">
      <input v-model="est.provincia" placeholder="Provincia">
      <select v-model="est.genero">
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </select>
      <button @click="actualizar">Actualizar Todo</button>
    </div>
  </div>
</template>

<script>
import { actualizarFachada } from "@/client/MatriculaClient.js";
export default {
  data: () => ({ id: '', est: { nombre: '', apellido: '', fechaNacimiento: '', provincia: '', genero: '' } }),
  methods: {
    async actualizar() {
      await actualizarFachada(this.id, this.est);
      alert("Actualizado!");
    }
  }
}
</script>