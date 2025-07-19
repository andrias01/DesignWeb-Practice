<script setup>
import { ref, computed } from 'vue';
const userName = ref('Andrés');
// Cuando se usa ref, se debe acceder al valor con .value
// Computed es una función que se usa para crear propiedades computadas
// Las propiedades computadas son valores que se recalculan automáticamente
// cuando sus dependencias cambian, lo que las hace ideales para cálculos derivados de datos reactivos.
// Computed dependera de userName, y se recalculará cada vez que userName cambie.
const nameLength = computed(() => {
    return userName.value.length;
});
</script>

<template>
    <h1>Computed | Propiedades computadas</h1>
    <h2>Hola {{ userName }}</h2>
    <h3>La longitud de mi nombre es: {{ nameLength }}</h3>
    <input type="text" v-model="userName" placeholder="Escribe tu nombre aquí" />
</template>

<script>
</script>