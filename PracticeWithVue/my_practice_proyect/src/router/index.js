import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Movies from "../pages/Movies.vue";
import CreateMovie from "../pages/CreateMovie.vue";
import MoviesDetails from "../pages/MoviesDetails.vue";

const router = createRouter({
  history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home  
        },
        {
            path: '/movies',
            name: 'movies',
            component: Movies
        },
        {
            path: '/movies/:id_title',
            name: 'movie-details',
            component: MoviesDetails,
        },
        {
            path: '/create-movie',
            name: 'create-movie',
            component: CreateMovie
        }
    ]
})

export default router;