<template>
  <div class="vista">
    <h1>Actualización Total de Estudiante</h1>
    <div class="form">
      <input v-model="id" placeholder="ID del estudiante a editar">
      <hr>
      <input v-model="est.nombre" placeholder="Nombre">
      <input v-model="est.apellido" placeholder="Apellido">
      <input v-model="est.fechaNacimiento" type="date">
      <input v-model="est.provincia" placeholder="Provincia">
      <select v-model="est.genero">
        <option disabled value="">Seleccione un género</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </select>
      <button @click="actualizar">Guardar Cambios</button>
    </div>
  </div>
</template>

<script>
import { getToken } from "@/client/AuthorizationClient";
import { actualizarFachada } from "@/client/MatriculaClient.js";

export default {
  data: () => ({ 
    id: '', 
    est: { nombre: '', apellido: '', fechaNacimiento: '', provincia: '', genero: '' } 
  }),
  methods: {
    async actualizar() {
      try {
        if(!this.id) return alert("Por favor, ingrese un ID");
        await actualizarFachada(this.id, this.est);
        alert("¡Estudiante actualizado correctamente!");
        this.id = '';
        this.est = { nombre: '', apellido: '', fechaNacimiento: '', provincia: '', genero: '' };
      } catch (error) {
        console.error("Error en la petición:", error);
        alert("Error al actualizar. Verifique que el ID sea correcto.");
      }
    }
  },
  async mounted() {
    try {
      const tokenData = await getToken("admin", "1234");
      localStorage.setItem('auth_token', tokenData.accessToken);
      console.log("Token obtenido para Actualizar:", tokenData);
    } catch (error) {
      console.error("Error al obtener token:", error);
    }
  }
}
</script>