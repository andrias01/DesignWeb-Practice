<script setup>
import { ref, watch, watchEffect } from 'vue';
const firstNameObject = ref({
    name: 'Andrés',
    age: 30,
});
const setNameObject = () => {
    firstNameObject.value.name = 'Felipe';
    firstNameObject.value.age = 31; // Cambiando también la edad para ver el efecto del deep watch
};
const firstName = ref('Andrés');
const setName = () => {
    firstName.value = 'Felipe';
};

// Watch es una función que se usa para observar cambios en una variable reactiva
// y ejecutar una función cuando esa variable cambia.
watch(
    firstName, 
    (newValue, oldValue) => {
    console.log(`El nombre ha cambiado de ${oldValue} a ${newValue}`);
    },
    {
        immediate: true, // Ejecuta la función inmediatamente al iniciar
    }
);

watch(
    firstNameObject, 
    (newValue, oldValue) => {
        console.log(`El objeto ha cambiado de ${JSON.stringify(oldValue)} a ${JSON.stringify(newValue)}`);
    },
    {
        deep: true, // Observa cambios profundos en el objeto
        immediate: true, // Ejecuta la función inmediatamente al iniciar
    }
);

// WatchEffect es una función que se usa para ejecutar una función cada vez que se detecta un cambio en las variables reactivas dentro de ella.
// Es útil para efectos secundarios que no dependen de una variable específica.
//siempre se va a ejecutar cuando se detecte un cambio en las variables reactivas dentro de la función.
watchEffect(() => {
    console.log(`El nombre actual es: ${firstName.value}`);
    console.log(`El objeto actual es: ${JSON.stringify(firstNameObject.value)}`);
});
</script>

<template>
    <h1>Watch de variables || variar</h1>
    <h2>Hola {{ firstName }}</h2>
    <button @click="setName">Cambiar nombre</button>
    <div class="watch-container">
        <h1>Watch para objetos</h1>
        <h2>Hola {{ firstNameObject.name }}</h2>
        <button @click="setNameObject">Cambiar nombre del objeto</button>
        <h3>Edad: {{ firstNameObject.age }}</h3>
        <button @click="firstNameObject.age++">Aumentar edad</button>
        <button @click="firstNameObject.age--">Disminuir edad</button>
        <p>Abre la consola para ver los cambios en las variables</p>

    </div>
    
</template>

<style>
.watch-container {
    border-radius: 8px;
    margin-top: 20px;
    border: 5px solid #4a90e2;
}
</style>

