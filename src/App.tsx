import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import MovieContainer from './components/MovieContainer/MovieContainer';
import movieService from './services/GetMovieService';
import movieList from './assets/movieList.json';
import getAllMovies from './services/GetAllMoviesService';
import movies from './assets/movies.json';

export default function App() {
  const [movie, setMovie] = useState<AxiosResponse | null | void>(null);
  useEffect(()=>{
    const getMovie = async () => {
      const data = await movieService("Good Will Hunting");
      setMovie(data);
    }
    getMovie();
  },[]);
  console.log(getAllMovies());
  // console.log(movie);
  return (
    <div className="">
      <ul>
      {movieList.map(movie=>(
          <li>
            {movie.title}
          </li>
        ))}
      </ul>
      {movie?.data.Title}
      <MovieContainer movie=""/>
      <ul>
        {movies.map(movie=>(
          <li>
            {movie.Plot}
          </li>
        ))}
      </ul>
    </div>
  );
}