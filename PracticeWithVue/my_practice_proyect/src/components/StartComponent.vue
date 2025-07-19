<script setup>
import { ref } from 'vue';
import { animals } from '../data/animals.js';
//Con esto genero una variable reactiva
// let number = ref(0);
// setInterval(() => {
//     number.value++;
// },1000);
let number = ref(0);
const addOne = () => {
    number.value++;
};
const varibleV_bind = "patata";
const varibleV_bind2 = "otrapapata";
//cuando le pongo el ref a una variable
//vue me lo interpreta como una variable reactiva
const varibleV_bind3 = ref("patataReactiva");
const cambiarEstilo = () => {
    varibleV_bind.value = "otrapapata";
};
const conditional = ref(true);
const cambiarCondicional = () => {
    conditional.value = !conditional.value;
};
const condition = false;
const condition2 = false;
const movies = ref([
    { title: "El señor de los anillos", year: 2001 },
    { title: "El padrino", year: 1972 },
    { title: "Pulp Fiction", year: 1994 }
]);

const animalest = ref(animals);

</script>
//instale la extension de Vue para los @ autocompletar
// y el @ es para que me autocompleten las variables reactivas
//no importa si no le pongo los parentes a la funcion
// porque vue lo interpreta como una funcion de flecha
// v-model es para que se actualice la variable reactiva
// v-bind es para que se actualice el id del h3
// v-if es para que se renderice una etiqueta si se cumple la condicion
// v-else-if es para que se renderice una etiqueta si la condicion anterior no se
// v-for es para iterar sobre un array

<template>
    <h1 :id="conditional ? 'patata' : 'otrapapata'" @click="cambiarCondicional">Esto es para poner stilos condicionados
    </h1>
    <h2 v-if="condition">v-if para que una etiqueta se renderice</h2>
    <h2 v-else-if="condition2">V-if que se ejecuta si 1 no es true</h2>
    <h2 v-else>Siempre se muestra si no se cumples las condiciones</h2>
    <h1>Renderizado de peliculas</h1>
    <div>
        <p v-for="(movie, index) in movies" :key="movie.title">
            {{ index + 1 }} - {{ movie.title }} - {{ movie.year }}
        </p>
    </div>
    <ul>
        <li v-for="(animal, index) in animalest" :key="animal.id">
            {{ index + 1 }} - {{ animal.name }}
            <img :src="animal.img" alt="" width="200" />
        </li>
    </ul>
    <!-- <h1>Hola mi primer proyecto con vue</h1>
    <h2 @click="addOne">{{ number }}</h2>
    <h3 v-bind:id="varibleV_bind">Ejemplo para V_bind</h3>
    en este input puedo escribir y se actualiza la variable reactiva
    <h1>{{ varibleV_bind3 }}</h1>
    <input type="text" v-model="varibleV_bind3"> -->
</template>
<style>
#patata {
    color: purple;
    background-color: blue;
    font-size: 30px;
}

#otrapapata {
    color: rgb(0, 128, 13);
    background-color: rgb(229, 255, 0);
    font-size: 60px;
}
</style>