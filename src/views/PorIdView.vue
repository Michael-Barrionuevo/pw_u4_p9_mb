<template>
  <div class="vista">
    <h1>Buscar por ID</h1>
    <div class="form">
      <input v-model="id" type="number" placeholder="ID del estudiante">
      <button @click="buscar">Consultar</button>
    </div>
    <div v-if="est" class="resultado-card">
      <p><strong>Nombre:</strong> {{ est.nombre }} {{ est.apellido }}</p>
      <p><strong>Fecha Nac:</strong> {{ est.fechaNacimiento }}</p>
      <p><strong>Provincia:</strong> {{ est.provincia }}</p>
      <p><strong>Género:</strong> {{ est.genero }}</p>
    </div>
  </div>
</template>

<script>
import { getToken } from "@/client/AuthorizationClient";
import { setToken } from "@/client/MatriculaClient";
import { consultarPorIdFachada } from "@/client/MatriculaClient.js";
export default {
  data: () => ({ id: '', est: null }),
  methods: {
    async buscar() {
      try { this.est = await consultarPorIdFachada(this.id); }
      catch { alert("No encontrado"); }
    }
  },
    async mounted() {
    try {
      
      const tokenData = await getToken("admin", "1234");
      console.log("Token obtenido para Buscar por ID:", tokenData);
      
      
      localStorage.setItem('auth_token', tokenData.accessToken);
      
    } catch (error) {
      console.error("Error al obtener el token quemado:", error);
    }
  },
}
</script>