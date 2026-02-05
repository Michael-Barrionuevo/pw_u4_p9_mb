<template>
  <div class="vista">
    <h1>Nuevo Estudiante</h1>
    <div class="form">
      <input v-model="est.nombre" placeholder="Nombre">
      <input v-model="est.apellido" placeholder="Apellido">
      <input v-model="est.fechaNacimiento" type="date">
      <input v-model="est.provincia" placeholder="Provincia">
      <select v-model="est.genero">
        <option value="" disabled>Seleccione Género</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </select>
      <button @click="guardar">Registrar</button>
    </div>
  </div>
</template>

<script>
// Importamos getToken para el "autologin" quemado
import { getToken } from "@/client/AuthorizationClient";
// Importamos la fachada para guardar
import { guardarFachada } from "@/client/MatriculaClient.js";

export default {
  data: () => ({ 
    est: { 
      nombre: '', 
      apellido: '', 
      fechaNacimiento: '', 
      provincia: '', 
      genero: '' 
    } 
  }),
  methods: {
  
    async guardar() {
      try {
        // 1. Validaciones básicas
        if(!this.est.nombre || !this.est.apellido || !this.est.fechaNacimiento) {
          return alert("Nombre, Apellido y Fecha son obligatorios");
        }

        // 2. CREAMOS EL PAQUETE "QUARKUS-FRIENDLY"
        // No enviamos 'this.est' directamente, enviamos una copia con la fecha arreglada
        const estudianteParaEnviar = {
          ...this.est,
          // Convertimos "YYYY-MM-DD" en "YYYY-MM-DDT00:00:00"
          fechaNacimiento: `${this.est.fechaNacimiento}T00:00:00`
        };

        console.log("Datos que viajan al backend:", estudianteParaEnviar);

        // 3. Enviamos el objeto transformado
        await guardarFachada(estudianteParaEnviar);

        alert("¡Estudiante registrado con éxito!");
        this.$router.push('/consultar');

      } catch (error) {
        // Si el error es 400, aquí veremos qué campo exactamente rechaza Quarkus
        if (error.response && error.response.status === 400) {
            console.error("Error 400 (Bad Request). El servidor dice:", error.response.data);
            alert("El servidor rechazó los datos. Revisa el formato de la fecha o campos vacíos.");
        } else {
            console.error("Error al registrar:", error);
            alert("Error al guardar. Asegúrate de que el token sea válido.");
        }
      }
    }
  
  },
  
  async mounted() {
    try {
      
      const tokenData = await getToken("admin", "1234");
      console.log("Token obtenido para Guardar:", tokenData);
      
      
      localStorage.setItem('auth_token', tokenData.accessToken);
      
    } catch (error) {
      console.error("Error al obtener el token quemado:", error);
    }
  }
}
</script>

<style scoped>
.form { display: flex; flex-direction: column; max-width: 350px; margin: 20px auto; gap: 12px; }
input, select, button { padding: 10px; border-radius: 4px; border: 1px solid #ccc; }
button { background-color: #4CAF50; color: white; font-weight: bold; cursor: pointer; border: none; }
</style>