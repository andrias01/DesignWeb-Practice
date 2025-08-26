<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import { useMovieStore } from "../stores/movie_store";

const movieStore = useMovieStore();

// onMounted es para ejecutar código cuando el componente se monta
onMounted(() => {
  console.log("Movies component mounted");
});

// onUnmounted es para ejecutar código cuando el componente se desmonta
onUnmounted(() => {
  console.log("Movies component unmounted");
});


</script>

<template>
    <HeaderComponent></HeaderComponent>
  <div>
    <h1>Movies</h1>
    <ul>
      <li v-for="movie in movieStore.movies" :key="movie.title" class="movie">
        <h2>
          <router-link :to="{ name: 'movie-details', params: { id_title: movie.title } }">
            {{ movie.title }}
          </router-link>
        </h2>
        <p>Director: {{ movie.director }}</p>
        <p>Año: {{ movie.year }}</p>
      </li>
    </ul>
  </div>
</template>

<style>
.movie {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>