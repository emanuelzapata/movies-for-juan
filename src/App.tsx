import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import movies from './assets/movies.json';
import MovieListCard from './components/MovieListCard/MovieListCard';
import MovieModal from './components/MovieModal/MovieModal';

export default function App() {
  let modalMovie: any;

  function practice(movie:any){
    modalMovie = movie;
    // console.log(movie);
    //console.log(modalMovie);
  }

  return (
    <div className="container">
      {movies.map(movie =>(
        <div onClick={()=>practice(movie)}>
          <MovieListCard movie={movie} />
        </div>
      ))}
      <MovieModal movie={modalMovie} />
    </div>
  );
}