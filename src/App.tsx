import React, { useState } from 'react';
import './App.css';
import movies from './assets/movies.json';
import { Icon } from './components/Icon/Icon';
import Grid from '@mui/material/Grid'; // Grid version 1

function App() {
  return (
    <React.Fragment>
      <Grid justifyContent="center" alignItems="center" container>
        <Grid item>
          <h1>Movies for Juan</h1>
        </Grid>
      </Grid>
      <Grid justifyContent="center" alignItems="center" container spacing={4} className="App">
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
