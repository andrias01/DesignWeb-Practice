<script setup>
import '../Styles/stylesChieldAndFather.css';
import { ref } from 'vue';
const userName = ref("Andrés");
//Definir un evento para emitir desde el hijo al padre
//defineEmits es una función que se usa para definir los eventos que el componente hijo puede
// emitir hacia el componente padre.
//En este caso, el evento se llama 'login' y se emite cuando el usuario
// hace clic en el botón de login.
const emit = defineEmits(['login']);
const handleLogin = () => {
    emit('login', userName.value); // Emitir el evento de login
};
//debo preparar el componente para que sea hijo
//definiendo los Props
   defineProps({
       //defino las propiedades que voy a recibir
       msg: String,
       person: {
            name: String,
            age: Number,  
            country: String
       }
   })
</script>

<template>
    <div class="child-component">
        <!-- le puedo poner un nombre a los slots para diferenciarlos -->
        <slot name="top">
            <h4>si no se pasa nada desde padre se muestra esto en top</h4>
        </slot>
        <h2>Este es un componente Hijo</h2>
        <p>Nombre de usuario: {{ userName }}</p>
        <button @click="handleLogin">Login</button>
        <slot name="botton">
            <h4>si no se pasa nada desde padre se muestra esto en botton</h4>
        </slot>
    </div>
    <!-- <h1>Este es un componente hijo</h1>
    <p>{{ msg }}</p> -->
    <!-- el signo de interrogación es para que no de error si no recibe el objeto
    se llama optional chaining -->
    <!-- <div>{{ person?.name }} - {{ person?.country }}</div> -->
</template>

<style>
.child-component {
    padding: 5px;
    border: 5px solid #4CAF50;
}
</style>