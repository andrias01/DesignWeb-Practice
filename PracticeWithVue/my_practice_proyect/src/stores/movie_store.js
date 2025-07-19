import { defineStore } from "pinia";
import { ref } from "vue";

export const useMovieStore = defineStore('movie',() => {
    const movies = ref([
        {
            title: 'Inception',
            director: 'Christopher Nolan',
            year: 2015,
            genre: 'Science Fiction'
        },
        {
            title: 'The Dark Knight',
            director: 'Christopher Nolan',
            year: 2008,
            genre: 'Action'
        },
        {
            title: 'Pulp Fiction',
            director: 'Quentin Tarantino',
            year: 1994,
            genre: 'Drama'
        },
        {
            title: 'Schindler\'s List',
            director: 'Steven Spielberg',
            year: 1993,
            genre: 'Drama'
        }
    ]);

    const addMovie = (movie) => {
        movies.value.push(movie);
    };

    const getMovieByTitle = (title) => {
        return movies.value.find(movie => movie.title === title);
    };

    return {
        movies,
        addMovie,
        getMovieByTitle
    };
// },{
//     persist: {
//         enabled: true,
//         strategies: [
//             {
//                 key: 'movie_store',
//                 storage: localStorage
//             }
//         ]
//     }
// }
});
