<script setup>
import { useRoute } from 'vue-router';
import HeaderComponent from '../components/HeaderComponent.vue';
import { useMovieStore } from '../stores/movie_store';

const route = useRoute();
const movieStore = useMovieStore();
const movie = movieStore.getMovieByTitle(route.params.id_title);
const movieTitle = route.params.id_title;

console.log('Route params:', route.params.id_title);
</script>
<template>
    <HeaderComponent />
    <h2 v-if="!movie">La pelicula no existe !!</h2>
    <div v-else>
        <h2>Title: {{ movie.title }}</h2>
        <p>Director: {{ movie.director }}</p>
        <p>Year: {{ movie.year }}</p>
    </div>
</template>
<script></script>