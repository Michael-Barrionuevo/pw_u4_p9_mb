<template>
  <div class="login">
    <h2>Login</h2>
    <input v-model = "usuario" type="text" placeholder="Usuario">
    <br>
    <input v-model = "password" type="password" placeholder="Contraseña">
    <br>
    <button @click="login()">Entrar</button>
  </div>
</template>

<script>
//import router from '@/router';
export default {

    data(){
        return{
            usuario: "",
            password: "",
        };
    },
    methods:{
        login(){
            // Mandar a obtener el token
            const Token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImFkbWluIiwiZ3JvdXBzIjpbImFkbWluIl0sImlhdCI6MTc3MDMzNjU0MSwiZXhwIjoxNzcwMzQwMTQxLCJqdGkiOiI2YmNmYzE2Zi0yY2EzLTRmNDgtOTQzNS1iYTZiNDYzYTJhY2UifQ.tuWwuzXFFlKXnjd_3X5331QCURa5Nfgq4mv2jVcvmx-4vszLhsCtVPTX9tcXaK4QERaSinUTpDGTVgLZr7BPBjf3p2SYQF7ewDa76rdJGXLQ63wL7E8cPrENS5jfABnSikCFW-fjzZKaMNOcuGOaVx6daijxwpIxc3Q7zzEJ3RufqwHiojDpsEsSnctTF_ajiTHPBKp7OflSrdffMCcwx1RGVJMbZKxmCzZCOut36vP58iHzooTnsvczMbdqOgkUTK7NKBR6mpF8YSSjOJ5Y-ALJKC-L3zHjU2SKycH6kgrGI1SZta0hC0Pp1Obu7C8OXK37JAvDcNlxVcifnA6TFg";
            if(Token !== null){
                console.log('Autenticación exitosa');
                localStorage.setItem("token",Token);
                localStorage.setItem("estaAutenticado","true");
                //router.push({name: 'about'});
                
        }else{
            console.log('Error de autenticación');

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