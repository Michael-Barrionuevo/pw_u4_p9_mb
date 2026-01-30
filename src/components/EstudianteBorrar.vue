<template>
  <div class="vista">
    <h2>6. Borrar Registro</h2>
    <div class="form">
      <input v-model="id" placeholder="ID a eliminar">
      <button @click="borrar" class="btn-rojo">Eliminar Ahora</button>
    </div>
  </div>
</template>

<script>
import { borrarFachada } from "@/client/MatriculaClient.js";
export default {
  data: () => ({ id: '' }),
  methods: {
    async borrar() {
      if(confirm("¿Seguro?")) {
        await borrarFachada(this.id);
        alert("Borrado!");
      }
    }
  }
}
</script>

<style scoped>
.vista {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}

.form {
  display: flex;
  flex-direction: column; /* Coloca los inputs uno debajo de otro */
  gap: 15px;
  width: 300px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-rojo {
  background-color: #ff4d4d;
}
</style>