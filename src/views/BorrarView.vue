<template>
  <div class="vista">
    <h1>Borrar Estudiante</h1>
    <div class="form">
      <input v-model="id" placeholder="ID a eliminar">
      <button @click="borrar" class="btn-rojo">Eliminar Definitivamente</button>
    </div>
  </div>
</template>

<script>
import { getToken } from "@/client/AuthorizationClient";
import { borrarFachada } from "@/client/MatriculaClient.js";

export default {
  data: () => ({ id: '' }),
  methods: {
    async borrar() {
      if (!this.id) return alert("Ingrese un ID");
      if (confirm("¿Está seguro de eliminar este registro?")) {
        try {
          await borrarFachada(this.id);
          alert("Eliminado correctamente");
          this.id = '';
        } catch (error) {
          console.error("Error al borrar:", error);
          alert("No se pudo eliminar el registro.");
        }
      }
    }
  },
  async mounted() {
    try {
      const tokenData = await getToken("admin", "1234");
      localStorage.setItem('auth_token', tokenData.accessToken);
      console.log("Token obtenido para Borrar:", tokenData);

    } catch (error) {
      console.error("Error al obtener token:", error);
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 30px auto;
  gap: 15px;
}
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn-rojo {
  padding: 10px;
  background-color: #d32f2f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
.btn-rojo:hover {
  background-color: #b71c1c;
}
</style>