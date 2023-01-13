import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import MovieContainer from './components/MovieContainer/MovieContainer';
import recommendations from './assets/recommendations.json';
import movies from './assets/movies.json';
import MovieListCard from './components/MovieListCard/MovieListCard';

export default function App() {
  function practice(movie:any){
    console.log(movie);
  }

  return (
    <div className="container">
      {movies.map(movie =>(
        <div onClick={()=>practice(movie)}>
          <MovieListCard movie={movie} />
        </div>
      ))}
    </div>
  );
}