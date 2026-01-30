<template>
  <div>
    <button v-on:click="consultarTodos">Consultar Todos</button>
    <button v-on:click="consultarPorId">Consultar Por Id</button>
    <button v-on:click="guardar">Guardar</button>
    <button v-on:click="actualizar">Actualizar</button>
    <button v-on:click="actualizarParcial">Actualizar Parcial</button>
    <button v-on:click="borrar">Borrar</button>
  </div>
</template>

<script>
import {
    consultarTodosFachada,
    consultarPorIdFachada,
    guardarFachada,
    actualizarFachada,
    actualizarParcialFachada,
    borrarFachada
} from '@/client/MatriculaClient.js';

export default {

    data(){
        return{



        }
    },

    methods:{
        async consultarTodos(){
            const respuesta = await consultarTodosFachada();
            console.log(respuesta);
        },

        async consultarPorId(){
            const respuesta = await consultarPorIdFachada(1);
            console.log(respuesta);
        },

        async guardar(){
            const body = {
                nombre: "Nuevo Nombre",
                apellido: "Nuevo Apellido"
            };
            const respuesta = await guardarFachada(body);
            console.log(respuesta);
        },

        async actualizar(){
            const body = {
                nombre: "Nombre Actualizado",
                apellido: "Apellido Actualizado"
            };
            const respuesta = await actualizarFachada(1, body);
            console.log(respuesta);
        },

        async actualizarParcial(){
            const body = {
                nombre: "Nombre Parcialmente Actualizado"
            };
            const respuesta = await actualizarParcialFachada(1, body);
            console.log(respuesta);
        },

        async borrar(){
            await borrarFachada(1);
            console.log("Registro borrado");
        }
    }

}


</script>

<style>

</style>