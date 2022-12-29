import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import MovieContainer from './components/MovieContainer/MovieContainer';
import recommendations from './assets/recommendations.json';
import movies from './assets/movies.json';

export default function App() {
  return (
    <div className="">
      {movies.map(movie=>(
        <li>
          {movie.Title}
        </li>
      ))}
      <MovieContainer />
    </div>
  );
}