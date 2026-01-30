<template>
  <div class="vista">
    <h1>Actualización Parcial</h1>
    <div class="form">
      <input v-model="id" placeholder="ID del estudiante">
      <p>Llena solo lo que quieras cambiar:</p>
      <input v-model="campos.nombre" placeholder="Nuevo Nombre">
      <input v-model="campos.provincia" placeholder="Nueva Provincia">
      <button @click="parcial">Aplicar Cambios</button>
    </div>
  </div>
</template>

<script>
import { actualizarParcialFachada } from "@/client/MatriculaClient.js";
export default {
  data: () => ({ id: '', campos: { nombre: '', provincia: '' } }),
  methods: {
    async parcial() {
      // Solo enviamos los campos que tienen texto
      const body = {};
      if(this.campos.nombre) body.nombre = this.campos.nombre;
      if(this.campos.provincia) body.provincia = this.campos.provincia;
      
      await actualizarParcialFachada(this.id, body);
      alert("Parcial actualizado!");
    }
  }
}
</script>