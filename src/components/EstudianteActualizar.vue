<template>
  <div class="vista">
    <h2>4. Actualización Total</h2>
    <div class="form">
      <input v-model="id" placeholder="ID del estudiante a editar" type="number">
      <hr>
      <input v-model="estudiante.nombre" placeholder="Nombre">
      <input v-model="estudiante.apellido" placeholder="Apellido">
      <input v-model="estudiante.fechaNacimiento" type="date">
      <input v-model="estudiante.provincia" placeholder="Provincia">
      <select v-model="estudiante.genero">
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
      </select>
      <button @click="actualizar">Actualizar Todo</button>
    </div>
  </div>
</template>

<script>
import { actualizarFachada } from "@/client/MatriculaClient.js";
export default {
  data: () => ({
    id: '',
    estudiante: { nombre: '', apellido: '', fechaNacimiento: '', provincia: '', genero: '' }
  }),
  methods: {
    async actualizar() {
      await actualizarFachada(this.id, this.estudiante);
      alert("Registro actualizado");
    }
  }
}
</script>