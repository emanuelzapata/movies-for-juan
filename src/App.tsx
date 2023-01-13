import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import MovieContainer from './components/MovieContainer/MovieContainer';
import recommendations from './assets/recommendations.json';
import movies from './assets/movies.json';
import MovieListCard from './components/MovieListCard/MovieListCard';

export default function App() {
  let parent = () => {
    console.log("on parent ");
  }
  return (
    <div className="container">
      {/* {movies.map(movie=>(
        <li>
          <img src={movie.Poster} />
        </li>
      ))} */}
      {/* <MovieContainer /> */}

      {movies.map(movie =>(
        <MovieListCard onClick={parent} movie={movie} />
      ))}

    </div>
  );
}