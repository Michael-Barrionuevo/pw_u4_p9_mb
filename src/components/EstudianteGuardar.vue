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
    estudiante: { 
      nombre: '', 
      apellido: '', 
      fechaNacimiento: '', 
      provincia: '', 
      genero: '' 
    }
  }),
  methods: {
   async guardar() {
  try {
    // Verificación rápida
    if (!this.estudiante.fechaNacimiento) return alert("Falta la fecha");

    const payload = {
      nombre: this.estudiante.nombre,
      apellido: this.estudiante.apellido,
      fechaNacimiento: this.estudiante.fechaNacimiento + "T00:00:00",
      provincia: this.estudiante.provincia,
      genero: this.estudiante.genero,
      hijos: [] // Enviamos una lista vacía para que Quarkus no reciba un null inesperado
    };

    await guardarFachada(payload);
    alert("¡Guardado!");
    // ... resetear formulario
  } catch (error) {
    console.error("Error 400 - Detalles:", error.response?.data);
  }
}
  }
}
</script>