<template>
  <div class="vista">
    <h2>1. Listado Completo</h2>
    <button @click="consultar">Cargar Datos</button>
    
    <table v-if="lista.length" border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha Nac.</th>
          <th>Provincia</th>
          <th>Género</th>
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
import { consultarTodosFachada } from "@/client/MatriculaClient.js";
export default {
  data: () => ({ lista: [] }),
  methods: {
    async consultar() {
      const res = await consultarTodosFachada();
      this.lista = res;
    }
  }
}
</script>

<style>
.vista {
  display: flex;
  flex-direction: column; /* Pone los elementos uno debajo de otro */
  align-items: center;    /* Centra horizontalmente todo lo que esté dentro */
  justify-content: center;
  width: 100%;            /* Asegura que use todo el ancho de la pantalla */
  padding: 20px;
}

.tabla-estudiantes {
  margin-top: 20px;
  width: 80%;             /* La tabla ocupará el 80% del ancho */
  border-collapse: collapse;
}
</style>