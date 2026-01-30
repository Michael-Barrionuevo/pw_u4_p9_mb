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
import { borrarFachada } from "@/client/MatriculaClient.js";
export default {
  data: () => ({ id: '' }),
  methods: {
    async borrar() {
      if(confirm("¿Estás seguro?")) {
        await borrarFachada(this.id);
        alert("Eliminado");
        this.id = '';
      }
    }
  }
}
</script>