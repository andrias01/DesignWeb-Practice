<script setup>
import { reactive } from 'vue';
import { useMovieStore } from '../stores/movie_store';
import router from '../router';
const movieStore = useMovieStore();

const movie = reactive({
    title: '',
    director: '',
    year: 0,
    genre: ''
});
const handleSubmit = () => {
    if (!movie.title || !movie.director || !movie.year || !movie.genre) {
        alert('Please fill in all fields.');
        return;
    }
    movieStore.addMovie({...movie});
    console.log('Movie submitted:', movie);
    movie.title = '';
    movie.director = '';    
    movie.year = 0;
    movie.genre = '';
    alert('Movie submitted successfully!');
    // router.push('/movies'); // Redirect to the movies page after submission
    //usando programacion programatica
    router.push({ name: 'movies' });
};
</script> 

<template>
    <h1>Forms</h1>
    <!-- cuando pongo el .prevent en el submit, no se recarga la pagina -->
    <form @submit.prevent="handleSubmit" class="form-container">
        <label for="title">Title</label>
        <select id="title" v-model="movie.title">
            <option value="Inception">Inception</option>
            <option value="The Dark Knight">The Dark Knight</option>
            <option value="Pulp Fiction">Pulp Fiction</option>
            <option value="Schindler's List">Schindler's List</option>
            <option value="Avatar">Avatar</option>
        </select>

        <label for="director">Director</label>
        <select id="director" v-model="movie.director">
            <option value="Christopher Nolan">Christopher Nolan</option>
            <option value="Steven Spielberg">Steven Spielberg</option>
            <option value="Martin Scorsese">Martin Scorsese</option>
            <option value="Quentin Tarantino">Quentin Tarantino</option>
            <option value="James Cameron">James Cameron</option>
        </select>
        

        <label for="year">Year</label>
        <input type="number" id="year" v-model="movie.year" />

        <label for="genre">Genre</label>
        <select id="genre" v-model="movie.genre">
            <option value="Science Fiction">Science Fiction</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
        </select>

        <button>Enviar</button>
    </form>
</template>

<style>
.form-container {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    gap: 10px  ;
}
</style>