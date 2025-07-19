<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';
// const text = "Hola desde el padre";
// const person = {
//     name: "Andrés",
//     age: 30,
//     country: "España"
// };
const displayName = ref("");
// Esta función se llama cuando el hijo emite el evento 'login'
// y recibe el nombre del usuario como argumento.
// Se usa para actualizar el nombre que se muestra en el padre.
const setName = (name) => {
    displayName.value = name;
};
</script>

<template>
    <h1>Props and Events | Comunicación Padre-Hijo</h1>
    <h2>Hola {{ displayName }}</h2>
    <!-- login desde el padre el cual se lo paso al hijo ya actualizado usando un evento emintido desde el hijo -->
    <ChildComponent @login="setName">
        <template v-slot:top>
            <h4>Este es el contenido del slot en el componente padre TOP.</h4>
        </template>
        <template v-slot:botton>
            <h4>Este es el contenido del slot en el componente padre BOTTOM.</h4>
        </template>
        <!-- este es un slot que se puede usar para mostrar contenido -->
        <!-- <p>Este es el contenido del slot en el componente padre.</p>
        <p>El hijo puede mostrar este contenido.</p> -->
    </ChildComponent>
    <ChildComponent></ChildComponent>
    <!-- <ChildComponent :msg="text" :person="person"></ChildComponent>
    <ChildComponent msg="Este mensaje lo paso desde padre para verlo en el hijo"></ChildComponent> -->
</template>

<style>
</style>