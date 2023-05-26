import React, { useState } from 'react';
import './App.css';
import movies from './assets/movies.json';
import { Icon } from './components/Icon/Icon';
import Grid from '@mui/material/Grid'; // Grid version 1

function App() {
  return (
    <React.Fragment>
      <Grid container justifyContent="center" spacing={4}>
        {movies.map((movie)=>(
          <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <Icon movie={movie} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default App;
