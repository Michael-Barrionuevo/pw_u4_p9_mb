<template>
  <div class="login">
    <h2>Login</h2>
    <input v-model = "usuario" type="text" placeholder="Usuario">
    <br>
    <input v-model = "password" type="password" placeholder="Contraseña">
    <br>
    <button @click="login()"> Entrar</button>
  </div>
</template>

<script>

import { getToken } from "@/client/AuthorizationClient";

export default {
    data() {
        return {
            usuario: "",
            password: "",
        };
    },
    methods: {
        async login() {
  try {
    const response = await getToken(this.usuario, this.password);
    
    if (response && response.accessToken) {
      
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("estaAutenticado", "true");

      
      const destino = this.$route.query.redirect || '/';
      
      console.log("¡Éxito! Saltando a:", destino);
      this.$router.push(destino);
    }
  } catch (error) {
    alert("Credenciales incorrectas");
  }
}
    }
}
</script>

<style>
.login{
    width: 400px;
    margin: 100px;
    padding: 20px;
    border: 1px solid skyblue;
    border-radius: 8px;
    text-align: center;
    
    
}
input{
    margin: 10px;
    padding: 8px;
    width: 80%;
    
    border: 1px solid lightgray;
    
}
button{
    padding: 10px 20px;
    background-color: skyblue;
    border: none;
    border-radius: 4px;
}
</style>