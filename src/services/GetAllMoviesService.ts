import axios from "axios";
import movieList from '../assets/movieList.json';

export default async function getAllMovies(){
    let movies = [];
    for(const movie of movieList){
        let response = await axios.get(`http://www.omdbapi.com/?apikey=8bfa8726&t=${movie.title}&y=${movie.year}`);
        movies.push(response.data);
    }
    return movies;
}