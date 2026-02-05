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
import { getToken } from "@/client/AuthorizationClient";
import { actualizarParcialFachada } from "@/client/MatriculaClient.js";

export default {
  data: () => ({ id: '', campos: { nombre: '', provincia: '' } }),
  methods: {
    async parcial() {
      try {
        if (!this.id) return alert("El ID es obligatorio");
        const body = {};
        if (this.campos.nombre.trim()) body.nombre = this.campos.nombre;
        if (this.campos.provincia.trim()) body.provincia = this.campos.provincia;

        await actualizarParcialFachada(this.id, body);
        alert("¡Actualización parcial exitosa!");
        this.campos = { nombre: '', provincia: '' };
      } catch (error) {
        console.error("Error:", error);
        alert("Error en la actualización parcial.");
      }
    }
  },
  async mounted() {
    try {
      const tokenData = await getToken("admin", "1234");
      localStorage.setItem('auth_token', tokenData.accessToken);
      console.log("Token obtenido para Actualización Parcial:", tokenData);
    } catch (error) {
      console.error("Error al obtener token:", error);
    }
  }
}
</script>