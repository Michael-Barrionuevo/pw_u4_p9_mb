<template>
  <div class="vista">
    <h2>3. Registrar Nuevo Estudiante</h2>
    <div class="form">
      <input v-model="estudiante.nombre" placeholder="Nombre">
      <input v-model="estudiante.apellido" placeholder="Apellido">
      
      <label>Fecha de Nacimiento:</label>
      <input v-model="estudiante.fechaNacimiento" type="date">
      
      <input v-model="estudiante.provincia" placeholder="Provincia">
      
      <label>Género:</label>
      <select v-model="estudiante.genero">
        <option value="" disabled>Seleccione...</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
      </select>

      <button @click="guardar">Guardar Registro</button>
    </div>
  </div>
</template>

<script>
import { guardarFachada } from "@/client/MatriculaClient.js";
export default {
  data: () => ({
    estudiante: { nombre: '', apellido: '', fechaNacimiento: '', provincia: '', genero: '' }
  }),
  methods: {
    async guardar() {
      try {
        await guardarFachada(this.estudiante);
        alert("Estudiante guardado con éxito");
        this.estudiante = { nombre: '', apellido: '', fechaNacimiento: '', provincia: '', genero: '' };
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>