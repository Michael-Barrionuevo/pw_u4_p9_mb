<template>
  <div class="vista">
    <h1>Listado de Estudiantes</h1>
    <button @click="cargar">Actualizar Tabla</button>
    <table v-if="lista.length" class="tabla-estudiantes">
      <thead>
        <tr>
          <th>ID</th><th>Nombre</th><th>Apellido</th><th>Fecha Nac.</th><th>Provincia</th><th>Género</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in lista" :key="e.id">
          <td>{{ e.id }}</td>
          <td>{{ e.nombre }}</td>
          <td>{{ e.apellido }}</td>
          <td>{{ e.fechaNacimiento }}</td>
          <td>{{ e.provincia }}</td>
          <td>{{ e.genero }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getToken } from "@/client/AuthorizationClient";
import { setToken } from "@/client/MatriculaClient";
import { consultarTodosFachada } from "@/client/MatriculaClient.js";
export default {
  data: () => ({ lista: [] }),
  methods: {
    async cargar() { this.lista = await consultarTodosFachada(); }
  },
  async mounted() {
    try {
      
      const tokenData = await getToken("admin", "1234");
      console.log("Token obtenido para Ver Todos:", tokenData);
      
      
      localStorage.setItem('auth_token', tokenData.accessToken);
      
    } catch (error) {
      console.error("Error al obtener el token quemado:", error);
    }
  }
}
</script>

<style> 
.vista {
  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: center;
  width: 100%;            
  padding: 20px;
}</style>
