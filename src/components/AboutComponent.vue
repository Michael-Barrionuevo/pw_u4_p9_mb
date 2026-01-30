<template>
  <div class="container">
    <h2>Registro de Estudiantes</h2>
    <div class="acciones">
      <button @click="consultarTodos">Consultar Todos</button>
      <button @click="consultarPorId">Consultar Por Id (ID: 2)</button>
      <button @click="guardar">Guardar Nuevo</button>
      <button @click="actualizar">Actualizar (ID: 1)</button>
      <button @click="actualizarParcial">Actualizar Parcial (ID: 1)</button>
      <button @click="borrar">Borrar (ID: 1)</button>
    </div>
  </div>
</template>

<script>
import {
  consultarTodosFachada,
  consultarPorIdFachada,
  guardarFachada,
  actualizarFachada,
  actualizarParcialFachada,
  borrarFachada,
} from "@/client/MatriculaClient.js";

export default {
  data() {
    return {
      estudiantes: [],
    };
  },

  methods: {
    async consultarTodos() {
      try {
        const lista = await consultarTodosFachada();
        console.log("Lista de estudiantes:", lista);
        this.estudiantes = [];
      } catch (error) {
        console.error("Error al consultar todos:", error);
      }
    },

    async consultarPorId() {
      try {
        const respuesta = await consultarPorIdFachada(2);
        console.log("Estudiante encontrado:", respuesta);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert("Estudiante no encontrado");
        } else {
          console.error("Error en consulta por ID:", error);
        }
      }
    },

    async guardar() {
      try {
        
        const body = {
          nombre: this.estudiante.nombre,
          apellido: this.estudiante.apellido,
          fechaNacimiento: this.estudiante.fechaNacimiento,
          provincia: this.estudiante.provincia,
          genero: this.estudiante.genero,
        };

        const respuesta = await guardarFachada(body);

        console.log("Guardado con éxito:", respuesta);
        alert("Estudiante guardado correctamente");

        
        this.estudiante = {
          nombre: "",
          apellido: "",
          fechaNacimiento: "",
          provincia: "",
          genero: "",
        };
      } catch (error) {
        console.error("Error al guardar:", error);
        alert("Hubo un error al guardar los datos");
      }
    },

    async actualizar() {
      try {
        const body = {
          nombre: "Nombre Actualizado",
          apellido: "Apellido Actualizado",
        };
        const respuesta = await actualizarFachada(1, body);
        console.log("Actualizado:", respuesta);
      } catch (error) {
        console.error("Error al actualizar:", error);
      }
    },

    async actualizarParcial() {
      try {
        const body = {
          nombre: "Nombre Parcialmente Actualizado",
        };
        const respuesta = await actualizarParcialFachada(1, body);
        console.log("Actualización parcial exitosa:", respuesta);
      } catch (error) {
        console.error("Error en actualización parcial:", error);
      }
    },

    async borrar() {
      try {
        await borrarFachada(1);
        console.log("Registro borrado");
        alert("Registro eliminado exitosamente");

        this.consultarTodos();
      } catch (error) {
        console.error("Error al borrar:", error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
button {
  cursor: pointer;
  padding: 8px 12px;
  border: black 1px solid;
  color: black;
  background-color: white;

  margin: 5px 10px;
}

button:hover {
  background-color: #5d5e35;
}
</style>