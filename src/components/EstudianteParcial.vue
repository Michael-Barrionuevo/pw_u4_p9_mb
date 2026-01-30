<template>
  <div class="vista">
    <h2>5. Actualización Parcial (PATCH)</h2>
    <div class="form">
      <label>ID del Estudiante:</label>
      <input v-model="id" type="number" placeholder="Ej: 1">
      
      <hr />
      <p class="instruccion">Solo llena los campos que deseas cambiar:</p>

      <input v-model="campos.nombre" placeholder="Nuevo Nombre">
      <input v-model="campos.apellido" placeholder="Nuevo Apellido">
      
      <label>Fecha de Nacimiento:</label>
      <input v-model="campos.fechaNacimiento" type="date">
      
      <input v-model="campos.provincia" placeholder="Nueva Provincia">
      
      <label>Género:</label>
      <select v-model="campos.genero">
        <option value="">No cambiar</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
      </select>

      <button @click="actualizarParcial" class="btn-parcial">
        Aplicar Cambios Seleccionados
      </button>
    </div>
  </div>
</template>

<script>
import { actualizarParcialFachada } from "@/client/MatriculaClient.js";

export default {
  data: () => ({
    id: '',
    campos: {
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      provincia: '',
      genero: ''
    }
  }),
  methods: {
    async actualizarParcial() {
      if (!this.id) {
        alert("El ID es obligatorio");
        return;
      }

      // Creamos un objeto solo con los campos que NO están vacíos
      const body = {};
      for (let clave in this.campos) {
        if (this.campos[clave] !== '') {
          body[clave] = this.campos[clave];
        }
      }

      if (Object.keys(body).length === 0) {
        alert("Debes llenar al menos un campo para actualizar");
        return;
      }

      try {
        await actualizarParcialFachada(this.id, body);
        alert("Actualización parcial exitosa");
        // Limpiamos campos
        this.campos = { nombre: '', apellido: '', fechaNacimiento: '', provincia: '', genero: '' };
      } catch (error) {
        console.error("Error:", error);
        alert("No se pudo realizar la actualización parcial");
      }
    }
  }
};
</script>

<style scoped>
.instruccion {
  font-size: 0.85em;
  color: #666;
  font-style: italic;
}
.btn-parcial {
  background-color: #f39c12; /* Color naranja para diferenciar del PUT */
  color: white;
  border: none;
}
.btn-parcial:hover {
  background-color: #e67e22;
}
</style>