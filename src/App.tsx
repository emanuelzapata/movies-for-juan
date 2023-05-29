import React, { useState, useEffect } from 'react';
import './App.css';
// import movies from './assets/movies.json';
import { Icon } from './components/Icon/Icon';
import Grid from '@mui/material/Grid'; // Grid version 1
import axios from 'axios';

// function getMovieData(){
//   const response = axios.post("https://movies-for-juan.web.app/getMovies");
//   return response;
//   // return axios.post("https://movies-for-juan.web.app/getMovies").then((response)=>{
//   //   return response.data;
//   // });
// }

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    axios.post("https://movies-for-juan.web.app/getMovies").then(async (response)=>{
      setMovies(await response.data);
    }).catch((error)=>{
      console.log(error.response);
    })
  },[])
  return (
    <React.Fragment>
      <Grid justifyContent="center" alignItems="center" container>
        <Grid item>
          <h1 className='main-title'>Movies for Juan</h1>
        </Grid>
      </Grid>
      <Grid justifyContent="center" alignItems="center" columns={4} container spacing={4} className="App">
        {movies.map((movie)=>(
          <Grid item>
            <Icon xs={12} movie={movie} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default App;
