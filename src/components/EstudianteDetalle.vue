<template>
  <div class="vista">
    <h2>2. Buscar por ID</h2>
    <input v-model="id" type="number" placeholder="ID">
    <button @click="buscar">Buscar</button>

    <div v-if="est" class="resultado">
      <p><strong>Nombre:</strong> {{ est.nombre }} {{ est.apellido }}</p>
      <p><strong>Fecha Nac:</strong> {{ est.fechaNacimiento }}</p>
      <p><strong>Provincia:</strong> {{ est.provincia }}</p>
      <p><strong>Género:</strong> {{ est.genero }}</p>
    </div>
  </div>
</template>

<script>
import { consultarPorIdFachada } from "@/client/MatriculaClient.js";
export default {
  data: () => ({ id: '', est: null }),
  methods: {
    async buscar() {
      this.est = await consultarPorIdFachada(this.id);
    }
  }
}
</script>